
const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const dateInput = document.querySelector('#date');
const placeInput = document.querySelector('#place');
const packsInput = document.querySelector('#packs');

// Función para validar el formulario
function validateForm(e) {
  e.preventDefault(); // Evita que se envíe el formulario automáticamente
  
  let isValid = true;
  
  // Validación nombre
  if (nameInput.value.trim() === '') {
    isValid = false;
    nameInput.classList.add('is-invalid');
    document.querySelector('#notification-name').textContent = 'Por favor, ingrese su nombre.';
  } else {
    nameInput.classList.remove('is-invalid');
  }
  
  // Validación correo electrónico
  if (emailInput.value.trim() === '') {
    isValid = false;
    emailInput.classList.add('is-invalid');
  } else {
    emailInput.classList.remove('is-invalid');
  }
  
  // Validación fecha del evento
  if (dateInput.value.trim() === '') {
    isValid = false;
    dateInput.classList.add('is-invalid');
  } else {
    dateInput.classList.remove('is-invalid');
  }
  
  // Validación lugar del evento
  if (placeInput.value.trim() === '') {
    isValid = false;
    placeInput.classList.add('is-invalid');
  } else {
    placeInput.classList.remove('is-invalid');
  }
  
  // Validación  pack a contratar
  if (packsInput.value === 'Desplegar Opciones') {
    isValid = false;
    packsInput.classList.add('is-invalid');
  } else {
    packsInput.classList.remove('is-invalid')
    packsInput.classList.remove('invalid-feedback');
  }
  packsInput.addEventListener('change', function () {
    if (this.value !== 'Desplegar Opciones') {
      this.classList.remove('is-invalid');
    }
  });
  
  // Envío del formulario si es válido
  if (isValid) {
    form.submit();
  }
}

form.addEventListener('submit', validateForm);

