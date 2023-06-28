const value = document.getElementsByClassName('slider-value');
const slider = document.getElementsByClassName('slider');
const clr = document.getElementById('clr');
const colorBox = document.getElementById('clr-box');

slider[0].addEventListener('input', change);
slider[1].addEventListener('input', change);
slider[2].addEventListener('input', change);

function change(){
    value[0].innerText = slider[0].value;
    value[1].innerText = slider[1].value;
    value[2].innerText = slider[2].value;
    clr.innerText = `rgb(${slider[0].value}, ${slider[1].value}, ${slider[2].value})`;
    colorBox.style.backgroundColor = `rgb(${slider[0].value}, ${slider[1].value}, ${slider[2].value})`
    if(slider[0].value<=100 || slider[1].value <=100){
        clr.style.color = 'white';
    }else if(slider[1].value<=20 && slider[2].value<=20){
        clr.style.color = 'white';
    }else if(slider[0].value<=20 && slider[2].value<=20){
        clr.style.color = 'white';
    }
    else {
        clr.style.color = 'black';
    }
}

change()

