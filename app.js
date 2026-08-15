const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_E7M_IvJn6U4-Q9tlaX7iug_Ft0W3fp_";
const SUPABASE_URL = "https://pmwsecsmnyieeudqlbfd.supabase.co/rest/v1/";

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
