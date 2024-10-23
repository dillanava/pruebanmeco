<?php
// Obtiene el contenido de la solicitud en formato JSON
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if ($data) {
    $name = $data['name'];
    $age = $data['age'];
    $profession = $data['profession'];

    echo "Nombre: $name, Edad: $age, Profesión: $profession";
} else {
    echo "No se recibieron datos.";
}
?>
