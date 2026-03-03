const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
function sharePortfolio() {
  if (navigator.share) {
    navigator.share({
      title: 'Portfólio - Larissa | Quality Analyst',
      text: 'Confira meu portfólio profissional:',
      url: window.location.href
    });
  } else {
    alert('Seu navegador não suporta compartilhamento direto. Use o botão copiar link.');
  }
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href);
  alert('Link copiado com sucesso!');
}