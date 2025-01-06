// Interação Menu Mobile
let btnmenu = document.getElementById("menu-btn");
let menumobile = document.getElementById("menu-mobile");
let overlay = document.getElementById("menu-overlay");
let botaofechar = document.querySelector(".btn-fechar");
let listmobile = document.getElementById("menu-mobile-list");

botaofechar.addEventListener("click", () => {
  menumobile.classList.remove("abrir-menu-mobile");
  overlay.classList.remove("abrir-menu-mobile");
});

btnmenu.addEventListener("click", () => {
  menumobile.classList.add("abrir-menu-mobile");
  overlay.classList.add("abrir-menu-mobile");
});

menumobile.addEventListener("click", () => {
  menumobile.classList.remove("abrir-menu-mobile");
  overlay.classList.remove("abrir-menu-mobile");
});

overlay.addEventListener("click", () => {
  menumobile.classList.remove("abrir-menu-mobile");
  overlay.classList.remove("abrir-menu-mobile");
});

// Interação Menu Sociais
let btnsociaisabrir = document.getElementById("abrir-sociais");
let menusociais = document.getElementById("menu-sociais");
let btnsociaisfechar = document.getElementById("fechar-sociais");

btnsociaisabrir.addEventListener("click", () => {
  menusociais.classList.add("abrir");
  btnsociaisabrir.classList.add("aberto");
});
menusociais.addEventListener("click", () => {
  btnsociaisabrir.classList.remove("aberto");
  menusociais.classList.remove("abrir");
});
btnsociaisfechar.addEventListener("click", () => {
  btnsociaisabrir.classList.remove("aberto");
  menusociais.classList.remove("abrir");
});

// Interações Cards
function setupCardInteraction(
  cardId,
  imageId,
  cardContId,
  parentSelector,
  allCards
) {
  const cardbtn = document.getElementById(cardId);
  const cardimg = document.getElementById(imageId);
  const divcard = document.getElementById(cardContId);
  const sectionmain = document.querySelector(parentSelector);

  if (!cardbtn || !cardimg || !divcard || !sectionmain) return;

  // Clique para abrir/fechar
  cardbtn.addEventListener("click", () => {
    const isActive = cardimg.classList.contains("abrir");

    // Remove as classes de todos os cards
    allCards.forEach((card) => {
      const btn = document.getElementById(card.cardId);
      const img = document.getElementById(card.imageId);
      const cont = document.getElementById(card.cardContId);

      if (btn && img && cont) {
        btn.classList.remove("rotacionar");
        img.classList.remove("abrir");
        cont.classList.remove("fechar");
        document.getElementById(card.cardId).classList.remove("invisible");
      }
    });

    // Se não estava ativo, ativa apenas o card clicado e torna os outros invisíveis
    if (!isActive) {
      allCards.forEach((card) => {
        if (card.cardId !== cardId) {
          document.getElementById(card.cardId).classList.add("invisible");
        }
      });
      cardimg.classList.add("abrir");
      divcard.classList.add("fechar");
      cardbtn.classList.add("rotacionar");

      // Centralizar Card na tela, quando ajustar a altura da section
      cardimg.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });

  // Fecha o card ao tirar o cursor da imagem
  cardimg.addEventListener("mouseleave", () => {
    cardimg.classList.remove("abrir");
    divcard.classList.remove("fechar");
    cardbtn.classList.remove("rotacionar");

    // Mostra todos os cards novamente
    allCards.forEach((card) => {
      const btn = document.getElementById(card.cardId);
      if (btn) {
        btn.classList.remove("invisible");
      }
    });
  });
}

// Configuração dos cards
const allCards = [
  { cardId: "card1", imageId: "imagemcard1", cardContId: "cardcont1" },
  { cardId: "card2", imageId: "imagemcard2", cardContId: "cardcont2" },
  { cardId: "card3", imageId: "imagemcard3", cardContId: "cardcont3" },
  { cardId: "card4", imageId: "imagemcard4", cardContId: "cardcont4" },
];

allCards.forEach((card) => {
  setupCardInteraction(
    card.cardId,
    card.imageId,
    card.cardContId,
    ".section-main",
    allCards
  );
});

// Animação Rolo de Pintura

document.addEventListener("DOMContentLoaded", () => {
  const rolopintor = document.querySelectorAll("#animacaorolodepintor");
  const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animado");
      }
    });
  });
  rolopintor.forEach((el) => observer.observe(el));
});