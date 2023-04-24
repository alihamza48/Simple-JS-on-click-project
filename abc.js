function changeColor(){
   let b =  document.querySelector('.h')
   
   if(b.style.color !== "red")
   {
       b.style.color = "red";
   }
   else if (b.style.color !== "black")
   {
    b.style.color = "black"
   }
}
function use(){
    let a= document.querySelector("ul")
 
    if(a.style.display === "none")
    {
       a.style.display =  "flex"
   }
   else if(a.style.display !== "none")
   {
       a.style.display = "none"
   }
   
}




