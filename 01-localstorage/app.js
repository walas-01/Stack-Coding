
const taskList = document.querySelector("#taskList")

//*--------------- Event Listeners

document.querySelector("#taskForm").addEventListener('submit',(event)=>{

    event.preventDefault()
    const task = document.querySelector("#taskText").value

    createNewTask(task)
    addTaskToLS(task)

})

taskList.addEventListener('click',deleteTask)


//* ------------- START

loadTasks()

//*--------------- functions


function createNewTask(task){

    if(task !== ""){
        const deleteButton = document.createElement("button")
        deleteButton.classList = "x"
        deleteButton.innerText = "x"
        
        const taskP = document.createElement('p')
        taskP.innerText = task
        
        const taskBox =   document.createElement("div")
        taskBox.classList = "task"
        taskBox.appendChild(deleteButton)
        taskBox.appendChild(taskP)
        
        taskList.appendChild(taskBox)
        
        document.querySelector("#taskText").value = ""
    }
    else{
        alert("[ ! ] - Can not enter an ampty task")
    }

}

function deleteTask(event) {
    event.preventDefault()
    if(event.target.classList.contains("x")){
        const taskBox = event.target.parentElement
        taskList.removeChild(taskBox)
        
        deleteTaskFromLS(taskBox.childNodes[1].innerText)
    }
}

 
function loadTasks(){
    let tasks = getTasksFromLS()
    tasks.forEach(task => {
        createNewTask(task)
    });
}

// ----------------------------- [LocalStorage]

function addTaskToLS(task){
    const tasks = getTasksFromLS()
    tasks.push(task)

    localStorage.setItem("tasks",JSON.stringify(tasks))
} 


function getTasksFromLS(){
    let tasks

    if(localStorage.getItem("tasks") === null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    return tasks
}


function deleteTaskFromLS(task){
    let tasks = getTasksFromLS()

    console.log(tasks)
    tasks.forEach((tsk,index) => {
        if(tsk === task){
            tasks.splice(index,1)
            
        }
    });

    localStorage.setItem("tasks",JSON.stringify(tasks))
}