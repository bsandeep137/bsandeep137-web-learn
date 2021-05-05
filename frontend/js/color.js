var red = document.getElementById("sliderRed")
var resred = document.getElementById("redvalue")
var boxpath=document.getElementById("box")
var green = document.getElementById("sliderGreen")
var resgreen = document.getElementById("greenvalue")
var blue = document.getElementById("sliderBlue")
var resblue = document.getElementById("bluevalue")
var result=document.getElementById("resvalue")
resred.innerHTML = red.value
resgreen.innerHTML = green.value
resblue.innerHTML= blue.value
result.innerHTML="rgb("+resred.innerHTML+","+resgreen.innerHTML+","+resblue.innerHTML+")"
boxpath.style.background="rgb("+resred.innerHTML+","+resgreen.innerHTML+","+resblue.innerHTML+")"

red.oninput=function(){
    resred.innerHTML=this.value
    boxpath.style.background="rgb("+resred.innerHTML+","+resgreen.innerHTML+","+resblue.innerHTML+")"
    result.innerHTML="rgb("+resred.innerHTML+","+resgreen.innerHTML+","+resblue.innerHTML+")"
}
green.oninput=function(){
    resgreen.innerHTML=this.value
    boxpath.style.background="rgb("+resred.innerHTML+","+resgreen.innerHTML+","+resblue.innerHTML+")"
    result.innerHTML="rgb("+resred.innerHTML+","+resgreen.innerHTML+","+resblue.innerHTML+")"
}

blue.oninput=function(){
    resblue.innerHTML=this.value
    boxpath.style.background="rgb("+resred.innerHTML+","+resgreen.innerHTML+","+resblue.innerHTML+")"
    result.innerHTML="rgb("+resred.innerHTML+","+resgreen.innerHTML+","+resblue.innerHTML+")"
}


