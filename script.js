



// let timeClick=0;

// for (let index = 0; index < document.getElementsByClassName('fa-heart').length; index++){
//     document.getElementsByClassName('fa-heart')[index].onclick  = function () {
//         timeClick++
        
// if (timeClick>1){
//         this.style.color = "red";
//         timeClick = 0
//     } else {
//         this.style.color = "black";
//     }   


//     }
// }


// const maxButton = document.getElementsByClassName("fa-plus-circle");
// const minusButton = document.getElementsByClassName("fa-minus-circle");
// const quan = document.getElementsByClassName("quantity");


// const total=document.getElementsByClassName("total-price");
// let sum = 0
// let tab = []


// for (let i = 0; i < maxButton.length; i++) {
//     maxButton[i].addEventListener("click", function(){
   
//         if(!Number(this.nextElementSibling.innerText)){
//             this.nextElementSibling.innerText=0;
//         }
//         this.nextElementSibling.innerText++

//         sum  = Number(this.nextElementSibling.innerText)*Number(this.parentNode.nextElementSibling.nextElementSibling.innerText.split("$")[0])
//          tab [i] = sum;
//         total[0].innerText = tab.reduce((prev , item)=>prev+item,0);
//         console.log( tab[i]);
        
//     })}
    
//     for (let i = 0; i < minusButton.length; i++) {
//         minusButton[i].addEventListener("click", function(){
//             this.previousElementSibling.innerText--;
        
         
//             if(!Number(this.previousElementSibling.innerText)||Number(this.previousElementSibling.innerText)<1){
//                 this.previousElementSibling.innerText= 0;}
          
        
            
                
//             sum  = Number(this.previousElementSibling.innerText)*Number(this.parentNode.nextElementSibling.nextElementSibling.innerText.split("$")[0])
//             tab[i] = sum;
//             console.log(tab.reduce((prev,item)=>prev+item,0))
//                         total[0].innerText= tab.reduce((prev,item)=>prev+item,0);
        
//             console.log( tab[i]);
        
        
//         })}


 








// var element=document.getElementsByClassName("card")
// var del=document.getElementsByClassName("fa-trash-alt")


// for (var j = 0; j < del.length; j++){

//     del[j].addEventListener("click",function  () {
   
//        element.remove();  })}
      


// var element=document.getElementsByClassName("card")
// var del=document.getElementsByClassName("fa-trash-alt")
// for (let j = 0; j < del.length; j++){

//     del[j].addEventListener("click",function  () {
   


//         element[j].remove();  })}      
        

 
 const map1 = ['ac','b','1',12,2,3] 
  


const data = (map1)=> map1.slice(-map1.length,-1);


console.log(data(map1));


var data1 = [
    {name: 'Joe', age: 20},
    {name: 'Bill', age: 30},
    {name: 'Kate', age: 23}
  ]

//   data1.map(el=>el.name)
//   console.log(data1.map(el=>el.name));     // 


  const getName = arr => arr.map (el=>el.name)
  console.log(getName(data1))



//   const doublechar= str => {


//     let resultat= ""

//     for ( let i=0;i<str.length;i++){
// resultat += str[i]+str[i]
//     }
//     return resultat
//   }

//   console.log(doublechar("abcd"))

// const doublechar= str => {


//     let resultat= ""

//     for ( let i=0;i<str.length;i++){
// resultat += str[i].repeat(2);
//     }
//     return resultat
//   }

//   console.log(doublechar("abcd"))



// const calcul=(obj)=>{
  
//   if(obj.operation ==="+") {
//     return obj.a+obj.b }
// else if (obj.operation==="-"){
//     return obj.a-obj.b }
// else if (obj.operation==="/"){
//     return obj.a/obj.b }
// else if(obj.operation==="*"){
//     return obj.a*obj.b}
// else if (obj.operation==="%"){
//     return obj.a%obj.b}
// else if(obj.operation==="^"){
//     return obj.a^obj.b }

// }
        
//         console.log(calcul({a:1,b:1,operation:'+'}))





    //  const calcul =( obj )=> {

    //    return eval ( `${obj.a}${obj.operation}${obj.b}`)
    //  }
    //         console.log(calcul({a:1,b:1,operation:'+'}))

      
      
    //         const calcul =( obj )=> {

    //             return eval ( `${obj.a}${obj.operation}${obj.b}`)
    //           }
    //                  console.log(calcul({a:1,b:1,operation:'+'}))
        


// const calcul= (obj) => {
// switch (obj.operation)  {

//     case '+': return obj.a+obj.b;
      
      
//       case '-': return obj.a-obj.b;
//         case '/':
//             return obj.a/obj.b;
//             case '*':
//                 return obj.a*obj.b;
               
    
    
//     default:return 0 
// }}

//   console.log(calcul({a:1,b:1,operation:'+'}))



  const calcul= (a,b,op) => {
    switch (op)  {
    
        case 'add': return a+b;
          
          
          case 'subtract': return a-b;
            case 'divide':
                return a/b;
                case 'multiply':
                    return a*b;
                   
        
        
        default:return 0 
    }}
    
      console.log(calcul(1,2,'add'))
   