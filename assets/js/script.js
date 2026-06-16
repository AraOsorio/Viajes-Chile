// Tooltips Bootstrap y alerta del formulario
document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: "hover"
    });
  });

  const btnEnviar = document.getElementById("btnEnviar");

  if (btnEnviar) {
    btnEnviar.addEventListener("click", function () {
      alert("Tu mensaje fue enviado correctamente.");
    });
  }
});