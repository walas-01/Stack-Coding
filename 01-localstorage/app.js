
const tasksContainer = document.querySelector("#taskList")

//* ------------- START

loadTasks()

//*--------------- Event Listeners

const form = document.querySelector("#taskForm")

form.addEventListener('submit',(event)=>{
    const task = document.querySelector('#taskText').value

    createTaskBox(task)

    addTaskToLS(task)
})

tasksContainer.addEventListener('click',(event)=>{
    if(event.target.classList.contains('x')){
        const task = event.target.parentElement.childNodes[1].innerText

        tasksContainer.removeChild(event.target.parentElement)
        deleteFromLS(task)
    }
})

//*--------------- functions

function createTaskBox(task){
    const button = document.createElement('button')
    button.classList = 'x'
    button.innerText ='x'

    const p = document.createElement('p')
    p.innerText = task

    const div = document.createElement('div')
    div.className = 'task'

    div.appendChild(button)
    div.appendChild(p)

    tasksContainer.appendChild(div)
    
    document.querySelector('#taskText').value = ''
}

// ----------------------------- [LocalStorage]

function getTasksFromLS(){
    if(localStorage.getItem('tasks') === null){
        return []
    }else{
        return JSON.parse(localStorage.getItem('tasks'))
    }
}

function addTaskToLS(task){
    const taskList = getTasksFromLS()

    taskList.push(task)
    localStorage.setItem('tasks',JSON.stringify(taskList))

    console.log(getTasksFromLS())
}

function loadTasks(){
    const taskList = getTasksFromLS()

    taskList.forEach((task) => {
        createTaskBox(task)
    });
}

function deleteFromLS(task){
    const taskList = getTasksFromLS()

    taskList.forEach((tsk,index) => {
        if(tsk === task){
            taskList.splice(index,1)
        }
    });

    localStorage.setItem('tasks',JSON.stringify(taskList))
}