let firstext = document.getElementById("first").value;
let secondtext=document.getElementById("second").value;
let resualtext=document.getElementById("resualt").value;
let options=document.getElementById("options").value;
let submit =document.getElementById("submit").value;

function calc()
{
   let firstext = parseFloat(document.getElementById("first").value);
   let secondtext=parseFloat(document.getElementById("second").value);
   
  
   let resualtext=document.getElementById("resualt").value=firstext-secondtext;


   if (resualtext>100) 
   {
      alert('You are doing very good job');
   }


}
