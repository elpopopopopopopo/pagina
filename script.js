document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  const estado = document.getElementById("estado-formulario");
  estado.textContent = "Mensaje enviado correctamente 😊";
  estado.style.color = "#b5ead7";
  this.reset();
});
