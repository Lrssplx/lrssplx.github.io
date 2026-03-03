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
function compartilhar() {
  const url = "https://lrssplx.github.io/";
  const texto = "Confira meu portfólio profissional";

  if (navigator.share) {
    navigator.share({
      title: "Portfólio Larissa",
      text: texto,
      url: url
    });
  } else {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(texto + " " + url)}`,
      "_blank"
    );
  }
}