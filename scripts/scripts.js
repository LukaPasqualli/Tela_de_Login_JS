  const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const checkbox = document.getElementById("lembrar");
const toggle = document.getElementById("toggleSenha");

toggle.addEventListener("click", () => {
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
  } else {
    senhaInput.type = "password";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const email = emailInput.value;
  const senha = senhaInput.value;

  if (email === "admin@gmail.com" && senha === "123") {
    alert("Login feito!");
  } else {
    alert("Email ou senha incorretos!");
  }
});

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    localStorage.setItem("email", emailInput.value);
  } else {
    localStorage.removeItem("email");
  }
});

window.onload = () => {
  const emailSalvo = localStorage.getItem("email");

  if (emailSalvo) {
    emailInput.value = emailSalvo;
    checkbox.checked = true;
  }
};