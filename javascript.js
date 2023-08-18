var contactoLi = document.querySelector(".contacto");
contactoLi.addEventListener("click", function(){
    var numeroTelefono = "555-5555";
    alert("Call us at: " + numeroTelefono)
});

contacto = document.querySelector(".contacto")
contacto.style.borderRadius = "20px"


// en la carga de sonido, busqué ayuda en chatGPT, donde "DOMContentLoaded"
// es un evento que activa cuando el DOM ya se cargó totalmente, 
// según entendí como el "window.onload"
document.addEventListener("DOMContentLoaded", function(){
    var sonido = document.querySelector(".sonido");
    var imagenSonido = document.querySelector(".imagen-sonido");

    imagenSonido.addEventListener("click", function (){
        sonido.play();
    })
})

//ésta forma no me resultó, ya que solo se desplegaba la 1ra opción, 2 y 3 quedaban igual
//document.addEventListener("DOMContentLoaded", function(){
//  const desplegable = document.querySelector("p.desplegar");
//  const oculto = document.querySelector("p.oculto");
//  desplegable.addEventListener("click", function(){
//      if (oculto.style.display === "none"){
//          oculto.style.display = "block";
//      } else {
//          oculto.style.display ="none";
//      }
//  })
// })


var desplegar = document.getElementsByClassName("desplegar");

for (var i = 0; i < desplegar.length; i++) {
    desplegar[i].addEventListener("click", function () {
        var oculto = this.nextElementSibling;
        if (oculto.style.display === "none" || oculto.style.display === "") {
            oculto.style.display = "block";
        } else {
            oculto.style.display = "none";
        }
    });
}

