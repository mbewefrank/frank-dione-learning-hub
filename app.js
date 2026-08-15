function openModal(id) {
  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.add("show");
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);

  if (modal) {
    modal.classList.remove("show");
  }
}

document.querySelectorAll(".modal").forEach(function (modal) {
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
});

function selectNetwork(button) {
  document
    .querySelectorAll(".network-grid button")
    .forEach(function (networkButton) {
      networkButton.classList.remove("selected");
    });

  button.classList.add("selected");
}
