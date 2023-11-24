// Capturamos los inputs pertenecientes al formulario
const nombre = document.querySelector('#nombre');
const firstName = document.querySelector('#firstName');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const metodo = document.querySelector('#metodo');

// Capturamos el formulario
const form = document.querySelector('#formulario');


// Función que verifica si un valor es requerido (no esta en blanco)
const isRequired = value => value == '' ? false : true;

// Función que verifica si la longitud de un valor está entre un rango dado
const isBetween = (length, min, max) => length < min || length > max ? false : true;

// Función que verifica la validez del nombre de usuario
const checkUsername = () => {
    // Variable bandera para indicar si el nombre de usuario es válido
    let valid = false;

    // Longitud mínima y máxima permitida para el nombre de usuario
    const min = 3, max = 25;

    // Verifica si el nombre de usuario no esta en blanco
    if (!isRequired(username.value.trim())) {
        showError('El nombre de usuario no puede estar en blanco');
    } else if (!isBetween(username.value.trim().length, min, max)) {
        // Verifica si la longitud del nombre de usuario está dentro del rango permitido
        showError('El nombre del usuario debe estar entre 3 y 25 caracteres');
    } else {
        // Si pasa ambas validaciones, marca como válido
        showSuccess(username.value.trim());
        valid = true;
    }

    // Devuelve la bandera que indica si el nombre de usuario es válido
    return valid;
}


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre');
        const firstName = document.getElementById('firstName');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const metodo = document.getElementById('metodo');

        const user = {
            name: nombre.value,
            firstName: firstName.value,
            username: username.value,
            email: email.value,
            metodo: metodo.value
        };

        try {
            const response = await fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                console.log('Datos enviados.');
            } else {
                console.error('Error al enviar los datos', response.status);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    });
});

