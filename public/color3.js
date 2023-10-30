image1 = new Image();
image1.src = "red.JPG";
image2 = new Image();
image2.src = "red1.png";

image3 = new Image();
image3.src = "yellow.JPG";
image4 = new Image();
image4.src = "yellow1.png";

image5 = new Image();
image5.src = "green.JPG";
image6 = new Image();
image6.src = "green1.png";

image7 = new Image();
image7.src = "black.JPG";
image8 = new Image();
image8.src = "black1.png";

image9 = new Image();
image9.src = "blue.JPG";
image10 = new Image();
image10.src = "blue1.png";

image11 = new Image();
image11.src = "pink.JPG";
image12 = new Image();
image12.src = "pink1.png";

image13 = new Image();
image13.src = "brown.JPG";
image14 = new Image();
image14.src = "brown1.png";

image15 = new Image();
image15.src = "orange.JPG";
image16 = new Image();
image16.src = "orange1.png";

image17 = new Image();
image17.src = "purple.JPG";
image18 = new Image();
image18.src = "purple1.png";


function mouseOver( e )
{
    if(e.target.getAttribute("id") == "red")
    {
        e.target.setAttribute("src" , image2.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "yellow")
    {
        e.target.setAttribute("src" , image4.getAttribute("src"));
    }
    
    if(e.target.getAttribute("id") == "green")
    {
        e.target.setAttribute("src" , image6.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "black")
    {
        e.target.setAttribute("src" , image8.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "blue")
    {
        e.target.setAttribute("src" , image10.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "pink")
    {
        e.target.setAttribute("src" , image12.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "brown")
    {
        e.target.setAttribute("src" , image14.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "orange")
    {
        e.target.setAttribute("src" , image16.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "purple")
    {
        e.target.setAttribute("src" , image18.getAttribute("src"));
    }
}

function mouseOut( e )
{
    if(e.target.getAttribute("id") == "red")
    {
        e.target.setAttribute("src" , image1.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "yellow")
    {
        e.target.setAttribute("src" , image3.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "green")
    {
        e.target.setAttribute("src" , image5.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "black")
    {
        e.target.setAttribute("src" , image7.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "blue")
    {
        e.target.setAttribute("src" , image9.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "pink")
    {
        e.target.setAttribute("src" , image11.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "brown")
    {
        e.target.setAttribute("src" , image13.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "orange")
    {
        e.target.setAttribute("src" , image15.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "purple")
    {
        e.target.setAttribute("src" , image17.getAttribute("src"));
    }
   
}

document.addEventListener("mouseover", mouseOver, false)
document.addEventListener("mouseout" , mouseOut , false)