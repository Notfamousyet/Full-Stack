// async and await are JavaScript keywords that allow you to write asynchronous code in a clean, synchronous-looking manner. Built on top of Promises, they make asynchronous operations like API calls, file handling, or timers significantly easier to read, write, and maintain.

function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:"Shreya",url:"https://vois.udemy.com/course/web-dev-master/learn/lecture/45708197#overview"})
        },3000);
    });
}

async function getUserData() {
    try{
        console.log("Fetching user data...")
        const userData=await fetchUserData();
        console.log("User data successfully fetched");
        console.log("User Data: ",userData);
    }
    catch(error){
        console.log("Error fetching details",error);
    }
}
getUserData();

function fetchPostData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Post Data fetched")
        },3000);
    })
}
function fetchCommentData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Comment data fetched.")
        },3000);
    });
}
async function getBlogData(){
    try{
        console.log("Fetching blog data");
        const [postData,commentData]=await Promise.all([
            fetchPostData(),
            fetchCommentData()
        ])
        console.log(postData);
        console.log(commentData);
        console.log("fetch complete");
    }
    catch(error){
        console.error("Error fetching blog data ",error);
    }
}
getBlogData();