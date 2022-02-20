
const color=["red","rgb(150,150,0)","green","rgb(0,200,100)","rgb(1, 255, 0)","rgb(50, 50, 0)"];
const btn=document.getElementById("btn");
var text1=document.getElementById("text_content");

btn.addEventListener("click",function xyz()
{
    var randomNumber=getRandomInt(5);
    console.log(randomNumber);
    document.body.style.backgroundColor = color[randomNumber];
    text1.innerHTML=color[randomNumber];   
});
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
