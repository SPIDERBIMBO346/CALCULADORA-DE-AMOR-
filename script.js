function calcularAmor() {
    var nombre1 = document.getElementById("nombre1").value;
    var nombre2 = document.getElementById("nombre2").value;
    
    if (nombre1 === "" || nombre2 === "") {
        document.getElementById("resultado").innerText = "Por favor, introduce ambos nombres.";
        return;
    }

    // Crear un "porcentaje" aleatorio entre 0 y 100
    var porcentaje = Math.floor(Math.random() * 100) + 1;
    
    document.getElementById("resultado").innerText = "La compatibilidad amorosa entre " + nombre1 + " y " + nombre2 + " es: " + porcentaje + "% 💖";
}
