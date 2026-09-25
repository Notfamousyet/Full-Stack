const fs=require('fs')
const filepath='./task.json'

const loadTask=()=>{
    try {
        const dataBuffer=fs.readFileSync(filepath)
        const dataJSON =dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}
const listTask=()=>{
    const tasks=loadTask()
    tasks.forEach((task,index)=>{
        console.log(`${index + 1} - ${task.task}`)
    })
}
const saveTask=(tasks)=>{
    const dataJSON=JSON.stringify(tasks)
    fs.writeFileSync(filepath,dataJSON);

}
const removeTask=(indexToRemove)=>{
    const tasks=loadTask()
    if(indexToRemove<1 || indexToRemove >tasks.length || isNaN(indexToRemove)){
        console.log("Invalid task number")
        return;
    }
    const updateTasks=tasks.filter((_,index)=>index !=indexToRemove-1);
    saveTask(updateTasks);
    console.log(`Task #${indexToRemove} removed`)
}
const addTask=(task)=>{
    const tasks=loadTask()
    tasks.push({task})
    saveTask(tasks)
    console.log("task added ",task);
}

const command =process.argv[2]
const argument=process.argv[3]

if(command==='add'){
    addTask(argument)
}else if(command==='list'){
    listTask()
}
else if(command==='remove'){
    removeTask(parseInt(argument))
}else{
    console.log("command not found")
}