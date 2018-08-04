
var renombroBoton = document.getElementById("BuildEvent");
//renombroBoton.addEventListener("click", FunctionCreaEvent);
renombroBoton.addEventListener("click", FunctionCreaEvent);

function FunctionCreaEvent ()
{
    alert(Math.random());
    renombroBoton.removeEventListener("click",FunctionCreaEvent);
}