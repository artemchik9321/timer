function ChangeColor() 
{
    par.style.backgroundColor = colors[i];
    i++;
    if (i == 5) 
    {
        i = 0;
    }
}
let divJs = document.getElementById("div");

let title1 = document.getElementById("title1");
title1.innerText = "What is Lorem Ipsum?";

let title2 = document.getElementById("title2");
title2.innerText = "Why do we use it?";

let par = document.getElementById("p");
par.innerText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here. content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

let title3 = document.getElementById("title3");
title3.innerText = "Where does it come from?";

let title4 = document.getElementById("title4");
title4.innerText = "Where can I get some?";

let colors = new Array("red", "lightblue", "green", "magenta", "pink", "yellow");
let i = 0;

setInterval("ChangeColor()", 1000);