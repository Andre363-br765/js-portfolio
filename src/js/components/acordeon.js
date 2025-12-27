export function initAcordeon() {
  // controla abrir/fechar as seções do acordeon
  const triggers = document.querySelectorAll(".acordeon .trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      trigger.parentElement.classList.toggle("open");
    });
  });
}
