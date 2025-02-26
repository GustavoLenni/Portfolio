// JavaScript para o carrossel de projetos

document.addEventListener('DOMContentLoaded', function() {
  // Dados dos projetos
  const projects = [
    {
      title: "Refeitório",
      banner: "./images/refeitorio-banner.png",
      logo: "./images/refeitorio-logo.png",
      team: "Grupo Senai",
      description: "O projeto Refeitório ajuda a melhorar a interação dos estudantes com a nutricionista. Aqui você pode acessar várias funcionalidades do sistema, como consulta ao cardápio e envio de mensagens.",
      projectUrl: "https://seuprojetorefeitorio.com",
      repoUrl: "https://github.com/Guhxs1010/Refeitorio"
    },
    {
      title: "Michael Instrumentos",
      banner: "./images/michael-banner.png",
      logo: "./images/michael-logo.png",
      team: "Grupo Senai",
      description: "Michael Instrumentos é um sistema para gerenciar instrumentos musicais, proporcionando controle de inventário e vendas.",
      projectUrl: "https://michaelmusical.com",
      repoUrl: "https://github.com/Guhxs1010/MichaelInstrumentos"
    },
    {
      title: "Orçamento Amigo",
      banner: "./images/Orcamento-banner.png",
      logo: "./images/Orcamento-logo.png",
      team: "Gustavo Lenni e Felipe Luz",
      description: "Orçamento Amigo é um sistema para gerenciar suas compras com maior facilidade, oferecendo controle financeiro e organização de gastos.",
      projectUrl: "https://orcamento-amigo.com",
      repoUrl: "https://github.com/Guhxs1010/OrcamentoAmigo"
    },
    {
      title: "SpookTunes",
      banner: "./images/spook-banner.png",
      logo: "./images/spook-logo.png",
      team: "Gustavo Lenni e Andrey Hiago",
      description: "SpookTunes é um sistema de música inspirado no Spotify, permitindo streaming de áudio, criação de playlists e descoberta de músicas.",
      projectUrl: "https://spooktunes.com",
      repoUrl: "https://github.com/Guhxs1010/SpookTunes"
    }
  ];

  // Elementos do carrossel
  const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  if (!track || !prevButton || !nextButton || !indicatorsContainer) {
    console.error("Erro: Um ou mais elementos do carrossel não foram encontrados.");
    return;
  }

  let currentIndex = 0;
  let startX;
  let currentTranslate = 0;
  let isDragging = false;

  // Inicializar indicadores
  function setupIndicators() {
    projects.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      if (index === 0) indicator.classList.add('active');

      indicator.addEventListener('click', () => {
        goToSlide(index);
      });

      indicatorsContainer.appendChild(indicator);
    });
  }

  function updateIndicators() {
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }

  function goToSlide(index) {
    if (index < 0) index = projects.length - 1;
    if (index >= projects.length) index = 0;

    currentIndex = index;
    currentTranslate = -currentIndex * 100;
    track.style.transform = `translateX(${currentTranslate}%)`;
    updateIndicators();
  }

  prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = (startX - currentX) / track.clientWidth * 100;
    track.style.transform = `translateX(${currentTranslate - diff}%)`;
  });

  track.addEventListener('touchend', (e) => {
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      goToSlide(currentIndex + (diff > 0 ? 1 : -1));
    } else {
      goToSlide(currentIndex);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
    if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
  });

  setupIndicators();
});
