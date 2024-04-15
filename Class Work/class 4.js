var h1=document.querySelector("heading");
var input=document.querySelector("name");
var name_btn=document.querySelector("name-btn");
var clear_btn=document.querySelector("clear-btn");

name_btn.addEventListener('click' ,function(){
    h1.innerText=input.value;
});
clear_btn.addEventListener('click' ,function(){
    h1.innertext="";
    input.value="";
})
