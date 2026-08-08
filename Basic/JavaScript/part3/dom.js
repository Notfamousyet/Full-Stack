// Example 1

document.getElementById("changeTextBtn").addEventListener("click",function(){
    let paragraph=document.getElementById("myParagraph");
    paragraph.textContent= "the content of paragraph is changed"
})

// Example 2

document.getElementById("highlightFirstCityBtn").addEventListener("click",function(){
    let Citylist=document.getElementById("cityList");
    Citylist.firstElementChild.classList.add("highlight")
})

// Example 3

document.getElementById("changeOrderBtn").addEventListener("click",function(){
    let coffeType=document.getElementById("orderType");
    coffeType.textContent="Expresso";
    coffeType.style.backgroundColor="brown";
})

// Example 4

document.getElementById("addNewItemBtn").addEventListener("click",function(){
    let newitem=document.createElement("li");
    newitem.textContent="Eggs";
    document.getElementById("shoppingList").appendChild(newitem);
})

// example 5

document.getElementById("removeLastTaskBtn").addEventListener("click",function(){
    let tasklist=document.getElementById("taskList");
    tasklist.lastElementChild.remove();
})

// example 6 

document.getElementById("clickMeButton").addEventListener("click",function(){
    alert("hello");
})

// example 7

document.getElementById("teaList").addEventListener("click",function(event){
    if(event.target && event.target.matches(".teaItem")){
        alert("You selected : "+ event.target.textContent)
    }
})

// example 8

document.getElementById("example-8").addEventListener("submit",function(event){
    event.preventDefault();
    let feedback=document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent=`feedback is :${feedback}`
})

// example 9

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("domStatus").textContent="DOM Fully loaded";
})

// example 10

document.getElementById("toggleHighlight").addEventListener('click',function(){
    let descriptionText=document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight")
})
