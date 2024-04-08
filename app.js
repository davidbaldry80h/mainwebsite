

let color = [, "#8ECAE6", "979DAC", "#001233", "#001233", "#0466C8", "#219EBC", "#E63946", "#A8DADC", "#457B9D"]

document.querySelector("#about-me").addEventListener(
    "mouseover", function (){

    document.querySelector("#about-me").style.background = color[(Math.floor(Math.random() * color.length))];
});





