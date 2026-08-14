document.addEventListener('DOMContentLoaded',()=>{
    const todoInput=document.getElementById("todo-input")
    const addTaskButton=document.getElementById("add-task-btn")
    const todoList=document.getElementById("todo-list")
    
    let task= JSON.parse(localStorage.getItem('task')) || []
    task.forEach((task) => renderTask(task))


    addTaskButton.addEventListener("click",()=>{
        const taskText=todoInput.value.trim();
        if(taskText===""){
            return;
        }
        const newTask={
            id:Date.now(),
            text:taskText,
            completed:false
        }
        task.push(newTask);
        saveTask();
        renderTask(newTask);
        todoInput.value=""
        console.log(task)
    })

    function saveTask (){
        localStorage.setItem('task',JSON.stringify(task))
    }

    function renderTask(taskss){
        const li=document.createElement("li");
        li.setAttribute('data-id',taskss.id);
        li.innerHTML=`<span>${taskss.text}</span><button>Delete</button>`;
        li.addEventListener('click',(e)=>{
            if(e.target.tagName==='BUTTON') return;
            taskss.completed = !taskss.completed;
            li.classList.toggle('completed');
            saveTask(); 
            renderTask(newTask);
            
        })
        li.querySelector('button').addEventListener('click',(e)=>{
            e.stopPropagation();
            task=task.filter(t => t.id != taskss.id)
            li.remove();
            saveTask();
        })
        todoList.appendChild(li);
    }

})


