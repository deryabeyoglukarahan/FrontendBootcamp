const audio1=new Audio("audios/boom.wav");
const audio2=new Audio("audios/clap.wav");
const audio3=new Audio("audios/hihat.wav");
const audio4=new Audio("audios/kick.wav");
const audio5=new Audio("audios/openhat.wav");
const audio6=new Audio("audios/ride.wav");
const audio7=new Audio("audios/snare.wav");
const audio8=new Audio("audios/tink.wav");
const audio9=new Audio("audios/tom.wav");

var button1=document.getElementById("button1");
var button2=document.getElementById("button2");
var button3=document.getElementById("button3");
var button4=document.getElementById("button4");
var button5=document.getElementById("button5");
var button6=document.getElementById("button6");
var button7=document.getElementById("button7");
var button8=document.getElementById("button8");
var button9=document.getElementById("button9");

button1.addEventListener("click", function(){
    audio1.play();
    button1.classList.add("bounce");

    // 200ms sonra animasyonu kaldır
    setTimeout(() => {
        button1.classList.remove("bounce");
    }, 200);
});
document.getElementById("button2").addEventListener("click",function(){
    audio2.play();
    button2.classList.add("shake");

    // 200ms sonra animasyonu kaldır
    setTimeout(() => {
        button2.classList.remove("shake");
    }, 200);
});
document.getElementById("button3").addEventListener("click",function(){
    audio3.play();
    button3.classList.add("bounce");

    // 200ms sonra animasyonu kaldır
    setTimeout(() => {
        button3.classList.remove("bounce");
    }, 200);
});
document.getElementById("button4").addEventListener("click",function(){
    audio4.play();
    button4.classList.add("rotate");

    // 200ms sonra animasyonu kaldır
    setTimeout(() => {
        button4.classList.remove("rotate");
    }, 200);
});
document.getElementById("button5").addEventListener("click",function(){
    audio5.play();
    button5.classList.add("pulse");

    // 200ms sonra animasyonu kaldır
    setTimeout(() => {
        button5.classList.remove("pulse");
    }, 200);
});
document.getElementById("button6").addEventListener("click",function(){
    audio6.play();
    button6.classList.add("flip");

    // 200ms sonra animasyonu kaldır
    setTimeout(() => {
        button6.classList.remove("flip");
    }, 200);
});
document.getElementById("button7").addEventListener("click",function(){
    audio7.play();
    button7.classList.add("vibrate");

    // 200ms sonra animasyonu kaldır
    setTimeout(() => {
        button7.classList.remove("vibrate");
    }, 200);
});
document.getElementById("button8").addEventListener("click",function(){
    audio8.play();
    button8.classList.add("flash");

    // 200ms sonra animasyonu kaldır
    setTimeout(() => {
        button8.classList.remove("flash");
    }, 200);
});
document.getElementById("button9").addEventListener("click",function(){
    audio9.play();
    button9.classList.add("jump");

    // 200ms sonra animasyonu kaldır
    setTimeout(() => {
        button9.classList.remove("jump");
    }, 200);
});

document.addEventListener("keydown", function(event){
    if(event.key==="a"|| event.key==="A"){
        audio1.play();
    }
        else if(event.key==="b"|| event.key==="B"){
            audio2.play();
        }
        else if(event.key==="c"|| event.key==="C"){
            audio3.play();
        }
        else if(event.key==="d"|| event.key==="D"){
            audio4.play();
        }
        else if(event.key==="e"|| event.key==="E"){
            audio5.play();
        }
        else if(event.key==="f"|| event.key==="F"){
            audio6.play();
        }
        else if(event.key==="g"|| event.key==="G"){
            audio7.play();
        }
        else if(event.key==="h"|| event.key==="H"){
            audio8.play();
        }
        else if(event.key==="k"|| event.key==="K"){
            audio9.play();
        }
});




