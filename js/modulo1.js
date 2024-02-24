const sliderInner = document.querySelector(".testimonios")
let puntos = document.getElementById("")
let indexSlider= 1;
let activador = false;   
let PrimeraVez = 55;
setInterval(function(){
    let puntos = document.getElementById(indexSlider)
    if (activador ==true) {
        if (indexSlider==0) {
            eliminarPunto(indexSlider);
            eliminarPunto(3);
        }else{
            eliminarPunto(indexSlider-1);
        }
    }
    let porcentaje = indexSlider * -25;
    sliderInner.style.transform = "translateX("+ porcentaje +"%)";
    puntos.setAttribute("class","punto-actual");
    indexSlider > 2 ? indexSlider=0 : indexSlider++;
    activador=true;
    if(PrimeraVez == 55){
        eliminarPunto(0);
        PrimeraVez=0;
        activador=true;
    }
},4000)

function callCard(num){
    let porcentaje = num * -25;
    sliderInner.style.transform = "translateX("+ porcentaje +"%)";
}

function eliminarPunto(num){
    let puntoAn =document.getElementById(num)
    puntoAn.removeAttribute("class");
    activador=false;
}