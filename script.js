const accordion =
document.querySelectorAll(".accordion");

accordion.forEach(btn => {

btn.addEventListener("click", () => {

const panel =
btn.nextElementSibling;

if(panel.style.display === "block"){

panel.style.display = "none";

}else{

panel.style.display = "block";

}

});

});


// Animación suave al cargar

window.addEventListener("load", () => {

document.body.style.opacity = "1";

});