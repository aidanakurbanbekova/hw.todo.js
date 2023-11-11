//находим элементы

const form = document.querySelector("#form")
const taskInput = document.querySelector('#task-Input')
const taskList = document.querySelector('#task-List')
const clearAll = document.querySelector('.clear-all');


//Добавления задачи
form.addEventListener('submit', addTask)
//Удаление задачи
taskList.addEventListener('click', deleteTask)
//ОТмечаем задачу завершенной

clearAll.addEventListener('click', clearFn);

function currentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours} : ${minutes}`;
}

function doneTaskFn(event){
    const checkbox = event.target;
    const spanElement = event.target.parentElement.previousElementSibling;
    console.log(spanElement);
    if (checkbox.checked){
        spanElement.style.textDecoration = 'line-through'
    }
    else {
        spanElement.style.textDecoration = 'none'
    }
}
function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    const createdAt = currentTime();
    if (taskText === "") {
        alert("Enter")
    }
    let taskHTML  = `          
            <li class="list-group-item ">
                <span class="task-title">${taskText} - ${createdAt}</span>
                <div class="task-item__buttons">
                    <input type="checkbox" class="btn-action">
                    <button class="btn-edit"> edit</button>
                    <button type="button" data-action="delete" class="btn-action-1">
                        <img src="img/cross.png" alt="Done" width="16px" height="16px" class="croos">
                    </button>
                </div>
           </li>`;
//Добовляем задчу на страницу
    taskList.insertAdjacentHTML('beforeend', taskHTML);

//Очищяем поле ввода и возвращяем на него фокус
    taskInput.value = "";
    taskInput.focus();
    const doneTask = document.querySelector('.btn-action')
    doneTask.addEventListener('change', doneTaskFn);
    doneTask.type = 'checkbox';
}
function deleteTask(event) {
    // console.log(event.target);

    if (event.target.dataset.action === 'delete') {
        console.log('delete')
        const perentNode = event.target.closest('.list-group-item');
        perentNode.remove()
    }
}
function clearFn(event){
    const clearLi = document.querySelectorAll('.list-group-item')
    clearLi.forEach(item =>{
        item.remove()
    })
}




