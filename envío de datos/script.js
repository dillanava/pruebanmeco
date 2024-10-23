// Datos que quieres enviar
const data = {
    name: "Dorian",
    age: 29,
    profession: "Barbero"
};

// Función para enviar datos al archivo PHP
function sendDataToPHP() {
    fetch('process.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        document.getElementById('response').innerText = data; // Muestra la respuesta en la página
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Llamada a la función al cargar la página
window.onload = sendDataToPHP;

