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


   if (resualtext< 500) 
   {
      Swal.fire('היי !  ', 'אתה מבזבז יותר מדי כספים ! ', 'error')
   }
   

   if ( resualtext > 500)
   {
      Swal.fire('סחטיין !', 'מצב הכספי שלך מעולה !' , 'success');
   }
   /////////////////////////////////////////////////////////////////////


   var li =document.createElement("li");
   var first = document.getElementById("first").value;

var te = document.createTextNode(first);

li.appendChild(te);

    if (first === '' ) 
   {
     Swal.fire ('Hey' , 'You didnt do anything today ?' , 'error') ;
   }

   else 
   {
      document.getElementById("myPrice").appendChild(li);
   }

   document.getElementById("first").value= "";

   var span = document.createElement("SPAN");
   var txt = document.createTextNode("");
   span.className = "close";
   span.appendChild(txt);
   li.appendChild(span);
 
   for (i = 0; i < close.length; i++) 
   {
     close[i].onclick = function()
     {
       var div = this.parentElement;
       div.style.display = "none";
     }

   }  



}