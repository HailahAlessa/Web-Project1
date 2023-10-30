image11 = new Image();
image11.src = "good_morning.jpg";
image22 = new Image();
image22.src = "goodmor.png";

image33 = new Image();
image33.src = "good_night.jpg";
image44 = new Image();
image44.src = "goodnight.png";

image55 = new Image();
image55.src = "goodbye.jpg";
image66 = new Image();
image66.src = "goodbye.png";

image77 = new Image();
image77.src = "hello.jpg";
image88 = new Image();
image88.src = "hello.png";




function mouseOver( e )
{
    if(e.target.getAttribute("id") == "good_morning")
    {
        e.target.setAttribute("src" , image22.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "good_night")
    {
        e.target.setAttribute("src" , image44.getAttribute("src"));
    }
    
    if(e.target.getAttribute("id") == "goodbye")
    {
        e.target.setAttribute("src" , image66.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "hello")
    {
        e.target.setAttribute("src" , image88.getAttribute("src"));
    }
 
}

function mouseOut( e )
{
    if(e.target.getAttribute("id") == "good_morning")
    {
        e.target.setAttribute("src" , image11.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "good_night")
    {
        e.target.setAttribute("src" , image33.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "goodbye")
    {
        e.target.setAttribute("src" , image55.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "hello")
    {
        e.target.setAttribute("src" , image77.getAttribute("src"));
    }

}

document.addEventListener("mouseover", mouseOver, false)
document.addEventListener("mouseout" , mouseOut , false)
