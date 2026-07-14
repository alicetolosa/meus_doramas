// 1. Seleção de Elementos do DOM : Modelo de Objetos do Document
const cardsContainer = document.getElementById('cards-container'); //Procure um elemento pelo ID

const heroSection = document.getElementById('main-hero');// Procure um elemento pelo ID
const heroTitle = document.getElementById('hero-title');
const heroDescription = document.getElementById('hero-description');
const heroRating = document.getElementById('hero-rating');
const heroYear = document.getElementById('hero-year');
const heroEpisodes = document.getElementById('hero-episodes');
const heroGenres = document.getElementById('hero-genres');

const btnPrev = document.querySelector('.carousel-btn.prev'); //Procure qualquer seletor CSS
const btnNext = document.querySelector('.carousel-btn.next');

// Função responsável por criar todos os cards dos doramas
function renderCards() {
  if (!cardsContainer) return;
  cardsContainer.innerHTML = ''; // Garante que comece vazio

  //Percorre todo o array doramasData
  doramasData.forEach(dorama => {
    const card = document.createElement('div'); //cria uma <div>
    card.classList.add('card'); //// Adiciona a classe CSS "card" na div criada
    card.style.backgroundImage = `url('${dorama.image}')`; //// Define a imagem de fundo do card usando a imagem do dorama

    //O innerHTML permite criar várias tags HTML de uma única vez
    card.innerHTML = `
      <span class="card-badge">${dorama.rating}</span> 
      <div class="card-info">
        <h3>${dorama.title}</h3>
        <p>${dorama.genres.split(', ')[0]}</p>
      </div>
    `;

    // Adiciona um evento de clique ao card
    card.addEventListener('click', () => {
      atualizarDestaque(dorama);  // Atualiza o Hero (banner principal)
    });

    // Adiciona o card criado dentro do container dos cards.
    cardsContainer.appendChild(card);
  });
}

// 3. Atualização do Banner de Destaque 
function atualizarDestaque(dorama) {
  if (!heroSection) return;
  
  // Efeito suave de transição de opacidade
  heroSection.style.opacity = 0.8;

  setTimeout(() => {
    if (heroTitle) heroTitle.innerHTML = dorama.title;
    if (heroDescription) heroDescription.textContent = dorama.description;
    if (heroRating) heroRating.textContent = `★ ${dorama.rating}`;
    if (heroYear) heroYear.textContent = `• ${dorama.year}`;
    if (heroEpisodes) heroEpisodes.textContent = `• ${dorama.episodes} episódios`;
    if (heroGenres) heroGenres.textContent = `• ${dorama.genres}`;
    
    // Altera a imagem de fundo mantendo o degradê escuro inferior
    heroSection.style.backgroundImage = `linear-gradient(to top, #0b0c10, rgba(11, 12, 16, 0.4)), url('${dorama.image}')`;
    
    heroSection.style.opacity = 1;
  }, 150);
}

// 4. Configuração dos botões de Rolagem do Carrossel
if (cardsContainer && btnPrev && btnNext) {
  btnNext.addEventListener('click', () => {
    cardsContainer.scrollBy({ left: 600, behavior: 'smooth' });
  });

  btnPrev.addEventListener('click', () => {
    cardsContainer.scrollBy({ left: -600, behavior: 'smooth' });
  });
}

// Inicializa a exibição ao carregar o arquivo
renderCards();