// Promise is a special object that acts as a placeholder for the future result of an asynchronous operation
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success= true;
            if(success){
                resolve("Data fetched successfully");
            }else{
                reject("Error fetching data");
            }
        },3000);
    });
}
fetchData()
    .then((data)=>{
        console.log(data)
        return data.toLowerCase()
    })
    .then((value)=>console.log(value))
    .catch((error)=>console.error(error))