//alert("prueba js");
//var run = setInterval (move,500)

var PosInitial=0;
var MovLeft= document.getElementById("box")
var timer = setInterval(move,50)

function move()
{
    if(PosInitial==150)
    {
        clearInterval(timer);
    }else
    {
        PosInitial++;
        MovLeft.style.left=PosInitial+"px";
    }
}


/*do
{            
    PosInitial++;
    function move(){MovLeft.style.left=PosInitial+"px"},1000;
}while(PosInitial<=150);
  */  

//setTimeout(,3000);
    
    


//MovLeft.style.left=150px;