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
const addTask=(task)=>{

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