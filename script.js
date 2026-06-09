const formulario =
document.getElementById("formulario");

formulario.addEventListener(
"submit",
function(event){

event.preventDefault();

alert(
"Cadastro enviado com sucesso! Obrigado por apoiar a APASC 🐾"
);

formulario.reset();

});