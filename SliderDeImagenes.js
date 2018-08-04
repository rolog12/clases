var imageCollage = new Array ('./image/charming cat.jpg',
                                './image/Down Ears.jpg',
                                './image/flor Azul.jpg',
                                './image/Kingfisher.jpg',
                                './image/Kitty.jpg',
                                './image/soap bubble.jpg');
let position_var = 0;
collage.src = imageCollage[position_var];
var RenamePrev = document.getElementById("Prev");
var RenameMore = document.getElementById("More");
RenameMore.addEventListener("click", FunctionNext);
RenamePrev.addEventListener("click", FunctionPrev);

function FunctionNext()
{            
    alert("posicion: "+position_var);
    if(position_var<imageCollage.length-1)
    {
        position_var++;
        collage.src = imageCollage[position_var];
        alert("posicion: "+position_var);
    }
}

function FunctionPrev()
{
    alert("posicion: "+position_var);
    if(position_var>=0 && position_var<=6 )
    {          
        if (position_var>0)
        {
            position_var--;
        }
        collage.src = imageCollage[position_var];
        alert("posicion: "+position_var);        
    }    
}
