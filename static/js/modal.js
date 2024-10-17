$(document).ready(function () {
    // Ejecuta el modal después de 1 segundo (1000 ms)
    setTimeout(function () {
        var landingModal = new bootstrap.Modal(document.getElementById('landingModal'));
        landingModal.show();
    }, 30000); // 1000 ms = 1 segundo
});