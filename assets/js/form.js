
const form = document.querySelector('.contact-form');
console.log(form)
const inputs = document.querySelectorAll('.contact-form .form-control')
console.log(inputs)
const nameInput = document.getElementById('input_name');
const emailInput = document.getElementById('input_email');
const numberInput = document.getElementById('input_number')
const dateInput = document.getElementById('input_date');
const placeInput = document.getElementById('input_place');
const packsInput = document.getElementById('input_packs');
const btnSubmit = document.getElementById('input_btn-submit')


//Expresiones Regulares para el formulario de Componentes
let expresions = {
  name: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{1,50}$/, //Regex solo letras y espacio
  email: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,// Formate fecha dd/mm/aaaa
  number: /^[0-9]{5,20}$/,
  date: /\d{4}-\d{2}-\d{2}/,
  place: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ/,]{1,50}$/,
  packs: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{1,50}$/,
};

//Funcion para validar inputs sin desplegable del Formulario 
let validacionCorrecta = true;
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "name":
            validarInputs(expresions.name, e.target, 'name')
            break;
        case "email":
            validarInputs(expresions.email, e.target, 'email')
            break;
        case "number":
            validarInputs(expresions.number, e.target, 'number')
            break;
        case "date":
            validarInputs(expresions.date, e.target, 'date')
            break;
        case "place":
            validarInputs(expresions.place, e.target, 'place')
            break;
        case "packs":
          console.log('pack')
            validarInputs(expresions.packs, e.target, 'packs')
            break;
    }
    if (e.target.classList.contains('is-invalid')) {
        validacionCorrecta = false;
    }
}


//Funcion para comparar regex con el valor del input agregando estilos (no desplegables)
const validarInputs = (expresion, input, campo) => {
    if (expresion.test(input.value) && !input.value.includes("Desplegar Opciones")) {
        document.getElementById(`input_${campo}`).classList.remove('is-invalid')
        document.getElementById(`input_${campo}`).classList.add('is-valid')
        document.getElementById(`notificacion_${campo}`).classList.add('visually-hidden')
    }
    else {
        document.getElementById(`input_${campo}`).classList.add('is-invalid')
        document.getElementById(`notificacion_${campo}`).classList.remove('visually-hidden')
    }
}


// let firbaseRef = firebase.da
let arrValues = [];
// Función para validar el formulario
const sendForm = (e) => {
e.preventDefault()
  const name = nameInput.value
  const email = emailInput.value
  const number = numberInput.value
  const date = dateInput.value
  const place = placeInput.value
  const pack = packsInput.value
  arrValues.push({ name, email, date, place, pack, number })
  console.log(arrValues)
  validacionCorrecta = true;
  inputs.forEach((input) => {
      validarFormulario({ target: input });
  })
  if (!validacionCorrecta) {
      e.preventDefault();
      const invalidInputs = document.querySelectorAll('.is-invalid');
      console.log(invalidInputs)
      invalidInputs[0].scrollIntoView({ behavior: "smooth" });
  } else {
      sendEmailjs(arrValues)
}
}


const sendEmailjs = (arrValues) => {

    console.log(arrValues)
    const inputValues = arrValues.map((inputValue) => {
        console.log(inputValue)
        return inputValue
    })
    const params = {
        nombre: `${inputValues[0].name}`,
        email: `${inputValues[0].email}`,
        telefono: `${inputValues[0].number}`,
        fecha: `${inputValues[0].date}`,
        lugar: `${inputValues[0].place}`,
        pack: `${inputValues[0].pack}`,
    }
    console.log(params)
    emailjs.send("service_w7zlwim","template_kbc289l", params)
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
	}, function(err) {
	   console.log('FAILED...', err);
	});

}





// document.querySelector('#btn-submit').addEventListener('click', validateForm);
form.addEventListener('submit', sendForm)

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario)
  input.addEventListener('change', validarFormulario)
})

