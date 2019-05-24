function addPrice () 
{

  asdasd
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