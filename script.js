const elForm = document.querySelector('#form');
const elTodoInput = document.querySelector('#todo-input');
const eltoDoList = document.querySelector('#todo-list');

elForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoText = elTodoInput.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.classList.add('list-item');
        eltoDoList.appendChild(li);

        const h3 = document.createElement('h3');
        h3.textContent = todoText;
        h3.classList.add('font-bold', 'text-lg');
        li.appendChild(h3);

        const btn = document.createElement('button');
        btn.classList.add('delete-btn');
        btn.textContent = 'Delete';
        li.appendChild(btn);

        elTodoInput.value = '';
    }
});

eltoDoList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
});