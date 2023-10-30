


numberOne = new Image();
numberOne.src = "one.PNG";
number1 = new Image();
number1.src = "1.JPEG";

numberTwo = new Image();
numberTwo.src = "two.PNG";
number2 = new Image();
number2.src = "2.JPEG";

numberThree = new Image();
numberThree.src = "three.PNG";
number3 = new Image();
number3.src = "3.JPEG";

numberFour = new Image();
numberFour.src = "four.PNG";
number4 = new Image();
number4.src = "4.JPEG";

numberFive = new Image();
numberFive.src = "five.PNG";
number5 = new Image();
number5.src = "5.JPEG";

numberSix = new Image();
numberSix.src = "six.PNG";
number6 = new Image();
number6.src = "6.JPEG";

numberSeven = new Image();
numberSeven.src = "seven.JPEG";
number7 = new Image();
number7.src = "7.JPEG";

numberEight = new Image();
numberEight.src = "eight.PNG";
number8 = new Image();
number8.src = "8.JPEG";


numberNine = new Image();
numberNine.src = "nine.PNG";
number9 = new Image();
number9.src = "9.JPEG";

numberTen = new Image();
numberTen.src = "ten.PNG";
number10 = new Image();
number10.src = "10.JPEG";




function mouseOver( e )
{
    if(e.target.getAttribute("id") == "one")
    {
        e.target.setAttribute("src" , number1.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "two")
    {
        e.target.setAttribute("src" , number2.getAttribute("src"));
    }
    
    if(e.target.getAttribute("id") == "three")
    {
        e.target.setAttribute("src" , number3.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "four")
    {
        e.target.setAttribute("src" , number4.getAttribute("src"));
    }
    if(e.target.getAttribute("id") == "five")
    {
        e.target.setAttribute("src" , number5.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "six")
    {
        e.target.setAttribute("src" , number6.getAttribute("src"));
    }
    
    if(e.target.getAttribute("id") == "seven")
    {
        e.target.setAttribute("src" , number7.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "eight")
    {
        e.target.setAttribute("src" , number8.getAttribute("src"));
    }
    if(e.target.getAttribute("id") == "nine")
    {
        e.target.setAttribute("src" , number9.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "ten")
    {
        e.target.setAttribute("src" , number10.getAttribute("src"));
    }
 
}



function mouseOut( e )
{
    if(e.target.getAttribute("id") == "one")
    {
        e.target.setAttribute("src" , numberOne.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "two")
    {
        e.target.setAttribute("src" , numberTwo.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "three")
    {
        e.target.setAttribute("src" , numberThree.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "four")
    {
        e.target.setAttribute("src" , numberFour.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "five")
    {
        e.target.setAttribute("src" , numberFive.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "six")
    {
        e.target.setAttribute("src" , numberSix.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "seven")
    {
        e.target.setAttribute("src" , numberSeven.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "eight")
    {
        e.target.setAttribute("src" , numberEight.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "nine")
    {
        e.target.setAttribute("src" , numberNine.getAttribute("src"));
    }

    if(e.target.getAttribute("id") == "ten")
    {
        e.target.setAttribute("src" , numberTen.getAttribute("src"));
    }


}

document.addEventListener("mouseover", mouseOver, false)
document.addEventListener("mouseout" , mouseOut , false)
