const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_E7M_IvJn6U4-Q9tlaX7iug_Ft0W3fp_";
const SUPABASE_URL = "https://pmwsecsmnyieeudqlbfd.supabase.co";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

console.log("Supabase connected:", !!supabase);


// ====================
// MODALS
// ====================

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


// Close modal when clicking outside

document.querySelectorAll(".modal").forEach(function (modal) {
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
});


// ====================
// REGISTER
// ====================

const registerModal = document.getElementById("registerModal");

if (registerModal) {

  const inputs = registerModal.querySelectorAll("input");

  const fullNameInput = inputs[0];
  const emailInput = inputs[1];
  const phoneInput = inputs[2];
  const passwordInput = inputs[3];

  const registerButton =
    registerModal.querySelector(".btn.full");

  registerButton.addEventListener("click", async function () {

    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value;

    if (!fullName || !email || !phone || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    registerButton.disabled = true;
    registerButton.textContent = "Creating account...";

    try {

      const { data, error } =
        await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            data: {
              full_name: fullName,
              phone: phone
            }
          }
        });

      if (error) {
        throw error;
      }

      console.log("Registered user:", data.user);

      alert(
        "Account created successfully. Please check your email if verification is required."
      );

      closeModal("registerModal");

      fullNameInput.value = "";
      emailInput.value = "";
      phoneInput.value = "";
      passwordInput.value = "";

    } catch (error) {

      console.error("Registration error:", error);

      alert(
        "Registration failed: " + error.message
      );

    } finally {

      registerButton.disabled = false;
      registerButton.textContent = "Create account";
    }
  });
}


// ====================
// LOGIN
// ====================

const loginModal = document.getElementById("loginModal");

if (loginModal) {

  const inputs = loginModal.querySelectorAll("input");

  const emailInput = inputs[0];
  const passwordInput = inputs[1];

  const loginButton =
    loginModal.querySelector(".btn.full");

  loginButton.addEventListener("click", async function () {

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    loginButton.disabled = true;
    loginButton.textContent = "Logging in...";

    try {

      const { data, error } =
        await supabase.auth.signInWithPassword({
          email: email,
          password: password
        });

      if (error) {
        throw error;
      }

      console.log("Logged in:", data.user);

      alert("Login successful!");

      closeModal("loginModal");

      emailInput.value = "";
      passwordInput.value = "";

    } catch (error) {

      console.error("Login error:", error);

      alert(
        "Login failed: " + error.message
      );

    } finally {

      loginButton.disabled = false;
      loginButton.textContent = "Log in";
    }
  });
}


// ====================
// MOBILE MONEY
// ====================

function selectNetwork(button) {

  document
    .querySelectorAll(".network-grid button")
    .forEach(function (networkButton) {
      networkButton.classList.remove("selected");
    });

  button.classList.add("selected");
}

