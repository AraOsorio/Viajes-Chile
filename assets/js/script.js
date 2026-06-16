// Tooltips Bootstrap
document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: "hover"
    });
  });

  // Alerta del formulario
  const btnEnviar = document.getElementById("btnEnviar");

  if (btnEnviar) {
    btnEnviar.addEventListener("click", function () {
      alert("Tu mensaje fue enviado correctamente.");
    });
  }

  // Efecto hover en las tarjetas destacadas
  const cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
      card.querySelector(".card-body").style.backgroundColor = "#0096c7";
    });

    card.addEventListener("mouseleave", function() {
      card.querySelector(".card-body").style.backgroundColor = "#00d4ff";
    });
  });

});