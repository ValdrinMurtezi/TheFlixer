const signIn = document.getElementById("sign-in");
const signUp = document.getElementById("sign-up");
const formModal = document.getElementById("sign-in-form");
const closeBtn = document.getElementById("login-close-btn");
const logIn = document.getElementById("login-form");
const register = document.getElementById("register-form");
const registerCloseBtn = document.getElementById("register-close-btn");
const infoBtn = document.getElementById("info");
const infoText = document.getElementById("info-content");
const infoCloseBtn = document.getElementById("info-close-btn");
const menuButton = document.getElementById("menu-button");
const links = document.getElementById("links");

signIn.addEventListener("click", () => {
  formModal.classList.add("open");
  register.classList.add("notopen");
  infoText.classList.add("notopen");
});

signUp.addEventListener("click", () => {
  formModal.classList.add("open");
  // register.classList.add("open");
  logIn.classList.add("notopen");
  infoText.classList.add("notopen");
});

registerCloseBtn.addEventListener("click", () => {
  formModal.classList.remove("open");
  logIn.classList.remove("notopen");
  infoText.classList.remove("notopen");
});

closeBtn.addEventListener("click", () => {
  formModal.classList.remove("open");
  register.classList.remove("notopen");
  infoText.classList.remove("notopen");
});

// INFO MODAL POP-UP

infoBtn.addEventListener("click", () => {
  formModal.classList.add("open");
  // infoText.classList.add("open");
  logIn.classList.add("notopen");
  register.classList.add("notopen");
});

infoCloseBtn.addEventListener("click", () => {
  formModal.classList.remove("open");
  logIn.classList.remove("notopen");
  register.classList.remove("notopen");
});

// RESPONISIVE MENU OPEN

menuButton.addEventListener("click", () => {
  links.classList.toggle("active");
});
