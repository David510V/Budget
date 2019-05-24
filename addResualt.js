function addResualt() {

    var li =document.createElement("li");
    var resualt = document.getElementById("resualt").value;
    
    var te = document.createTextNode(resualt);
    
    li.appendChild(te);
    
        if (resualt === '' ) 
       {
         Swal.fire ('Hey' , 'You didnt do anything today ?' , 'error') ;
       }
    
       else 
       {
          document.getElementById("myLast").appendChild(li);
       }
    
       document.getElementById("resualt").value= "";
    
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