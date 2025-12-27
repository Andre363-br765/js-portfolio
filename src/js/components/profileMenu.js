export function initProfileMenu(loadProfile) {
  // botão do menu e container dos perfis
  const menuBtn = document.querySelector(".menu");
  const profileMenu = document.getElementById("profile-menu");

  if (!menuBtn || !profileMenu) return;

  // abre / fecha menu
  menuBtn.addEventListener("click", () => {
    profileMenu.classList.toggle("hidden");
  });

  // troca o perfil ao clicar
  profileMenu.addEventListener("click", async (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const profileFile = button.dataset.profile;
    await loadProfile(profileFile);

    profileMenu.classList.add("hidden");
  });
}
