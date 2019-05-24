
function addList() {

  sadsa

  asdss
var li =document.createElement("li");
var myAdd = document.getElementById("myAdd").value;

var te = document.createTextNode(myAdd);

li.appendChild(te);

    if (myAdd === '' ) 
   {
     Swal.fire ('Hey' , 'You didnt do anything today ?' , 'error') ;
   }

   else 
   {
      document.getElementById("myUrl").appendChild(li);
   }
sada
   document.getElementById("myAdd").value= "";

   var span = document.createElement("SPAN");
   var txt = document.createTextNode("\u00D7");
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