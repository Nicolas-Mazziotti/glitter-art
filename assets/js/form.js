
const form = document.querySelector('.contact-form');
console.log(form)
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const dateInput = document.querySelector('#date');
const placeInput = document.querySelector('#place');
const packsInput = document.querySelector('#packs');
const btnSubmit = document.getElementById('btn-submit')


// Función para validar el formulario
const validateForm = (e) => {
  // e.preventDefault() // Evita que se envíe el formulario automáticamente
  console.log('hola1')
  let isValid = true;
  
  // // Validación nombre
  if (nameInput.value.trim() === '') {
    isValid = false;
    nameInput.classList.add('is-invalid');
  } else {
    nameInput.classList.remove('is-invalid');
  }
  
  // // Validación correo electrónico
  if (emailInput.value.trim() === '') {
    isValid = false;
    emailInput.classList.add('is-invalid');
  } else {
    emailInput.classList.remove('is-invalid');
  }
  
  // // Validación fecha del evento
  if (dateInput.value.trim() === '') {
    isValid = false;
    dateInput.classList.add('is-invalid');
  } else {
    dateInput.classList.remove('is-invalid');
  }
  
  // // Validación lugar del evento
  if (placeInput.value.trim() === '') {
    isValid = false;
    placeInput.classList.add('is-invalid');
  } else {
    placeInput.classList.remove('is-invalid');
  }
  
  // // Validación  pack a contratar
  const packsNotification = document.querySelector('.packs_notification')
  if (packsInput.value === 'Desplegar Opciones') {
    isValid = false;
    console.log(packsNotification)
    packsInput.classList.add('is-invalid');
    packsNotification.classList.remove('visually-hidden')
    btnSubmit.disabled 

  } else {
        packsInput.classList.remove('is-invalid')
        packsInput.classList.remove('invalid-feedback');
        
          }
  packsInput.addEventListener('change', function() {
    if (this.value !== 'Desplegar Opciones') {
      this.classList.remove('is-invalid');
      packsNotification.classList.add('visually-hidden')
    }
  });
  getFormValues()
  form.reset()
}

let arrValues = [];
console.log(arrValues)
const getFormValues = () => {
  const name = nameInput.value
  const email = emailInput.value
  const date = dateInput.value
  const place = placeInput.value
  const pack = packsInput.value
  arrValues.push({ name, email, date, place, pack })
  console.log(arrValues)
}

// document.querySelector('#btn-submit').addEventListener('click', validateForm);
form.addEventListener('submit', (e) => {
  e.preventDefault()
  validateForm()
});

