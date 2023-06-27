function showAlert() {
    alert('Hola, Esta es una alerta desde JavaScript');
    
}
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor revise su respuesta');
    } else {
      alert('Formulario enviado correctamente');
    }
  }

  /*Halando del Boton Menu. Cuando se haga clic sobre él, muestre el despliegue de opciones*/
  document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})