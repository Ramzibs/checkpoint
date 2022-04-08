



let timeClick=0;

for (let index = 0; index < document.getElementsByClassName('fa-heart').length; index++){
    document.getElementsByClassName('fa-heart')[index].onclick  = function () {
        timeClick++
        
if (timeClick>1){
        this.style.color = "red";
        timeClick = 0
    } else {
        this.style.color = "black";
    }   


    }
}


const maxButton = document.getElementsByClassName("fa-plus-circle");
const minusButton = document.getElementsByClassName("fa-minus-circle");
const quan = document.getElementsByClassName("quantity");


const total=document.getElementsByClassName("total-price");
let sum = 0
let tab = []


for (let i = 0; i < maxButton.length; i++) {
    maxButton[i].addEventListener("click", function(){
   
        if(!Number(this.nextElementSibling.innerText)){
            this.nextElementSibling.innerText=0;
        }
        this.nextElementSibling.innerText++

        sum  = Number(this.nextElementSibling.innerText)*Number(this.parentNode.nextElementSibling.nextElementSibling.innerText.split("$")[0])
         tab [i] = sum;
        total[0].innerText = tab.reduce((prev , item)=>prev+item,0);
        console.log( tab[i]);
        
    })}
    
    for (let i = 0; i < minusButton.length; i++) {
        minusButton[i].addEventListener("click", function(){
            this.previousElementSibling.innerText--;
        
         
            if(!Number(this.previousElementSibling.innerText)||Number(this.previousElementSibling.innerText)<1){
                this.previousElementSibling.innerText= 0;}
          
        
            
                
            sum  = Number(this.previousElementSibling.innerText)*Number(this.parentNode.nextElementSibling.nextElementSibling.innerText.split("$")[0])
            tab[i] = sum;
            console.log(tab.reduce((prev,item)=>prev+item,0))
                        total[0].innerText= tab.reduce((prev,item)=>prev+item,0);
        
            console.log( tab[i]);
        
        
        })}


 








var element=document.getElementsByClassName("card")
var del=document.getElementsByClassName("fa-trash-alt")


for (var j = 0; j < del.length; j++){

    del[j].addEventListener("click",function  () {
   
       element.remove();  })}
      


var element=document.getElementsByClassName("card")
var del=document.getElementsByClassName("fa-trash-alt")
for (let j = 0; j < del.length; j++){

    del[j].addEventListener("click",function  () {
   


        element[j].remove();  })}      
        

 
      
      
      
      
      
      
        
   