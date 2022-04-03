//add customizations

localStorage.setItem('sec1', 'hangmanSection1.png')

function s2c1(){
    document.getElementById('sec2').src = 'hangmanSection2Custom1.png';
    localStorage.setItem('sec2', 'hangmanSection2Custom1.png');
}
function s2c2(){
    document.getElementById('sec2').src = 'hangmanSection2Custom2.png';
    localStorage.setItem('sec2', 'hangmanSection2Custom2.png');
}


function s3c1(){
    document.getElementById('sec3').src = 'hangmanSection3Custom1.png';
    localStorage.setItem('sec3', 'hangmanSection3Custom1.png');
}
function s3c2(){
    document.getElementById('sec3').src = 'hangmanSection3Custom2.png';
    localStorage.setItem('sec3', 'hangmanSection3Custom2.png');
}


function s4c1(){
    document.getElementById('sec4').src = 'hangmanSection4Custom1.png';
    localStorage.setItem('sec4', 'hangmanSection4Custom1.png');
}
function s4c2(){
    document.getElementById('sec4').src = 'hangmanSection4Custom2.png';
    localStorage.setItem('sec4', 'hangmanSection4Custom2.png');
}


function reset(){
    document.getElementById('sec2').src = 'hangmanSection2.png';
    document.getElementById('sec3').src = 'hangmanSection3.png';
    document.getElementById('sec4').src = 'hangmanSection4.png';
}
