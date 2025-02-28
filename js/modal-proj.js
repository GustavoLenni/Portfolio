function abrirModal(projeto) {
    // Define conteúdo do modal com base no projeto
    let modalInfo = document.getElementById('modal-info');
    
    if (projeto === 'refeitorio') {
      modalInfo.innerHTML = `
        <h2 class="modal-title">Refeitório</h2>
        <img src="./images/refeitorio-banner.png" alt="Projeto Refeitório" class="modal-banner">
        
        <div class="modal-description">
          <p>O Projeto Refeitório é um projeto educativo criado para a rede SESI de Ferraz pelo meu grupo do SENAI, com o objetivo de auxiliar a nutricionista e os alunos.</p>
        </div>
        
        <div class="modal-gallery">
          <div class="gallery-item">
            <img src="./images/refeitorio-equipe.png" alt="Tela inicial">
          </div>
          <div class="gallery-item">
            <img src="./images/refeitorio-logo.png" alt="Logo Refeitório">
          </div>
        </div>

        <div class="modal-actions">
          <a href="https://github.com/joaopbg06/semestral" class="modal-btn btn-repo" target="_blank">
            Repositório
          </a>
        </div>
      `;
    } else if (projeto === 'orcamento') {
      modalInfo.innerHTML = `
        <h2 class="modal-title">Orçamento Amigo</h2>
        <img src="./images/Orcamento-banner.png" alt="Projeto Orçamento Amigo" class="modal-banner">
        
        <div class="modal-description">
          <p>Conheça os desenvolvedores do Orçamento Amigo e veja como baixar e utilizar o app de forma simples e eficiente!</p>
        </div>
        
        <div class="modal-gallery">
          <div class="gallery-item">
            <img src="./images/felipeluz.png" alt="Dashboard">
          </div>
          <div class="gallery-item">
            <img src="./images/gustavolenni.png" alt="Logo Orçamento">
          </div>
        </div>
        
        <video class="modal-video" controls>
          <source src="./videos/orcamento-demo.mp4" type="video/mp4">
          Seu navegador não suporta vídeos HTML5.
        </video>
        
        <div class="modal-actions">
          <a href="https://expo.dev/accounts/guhxs/projects/OrcamentoAmigo/builds/6fd7e8bd-ef01-42e8-a5d7-2411cec024f3" class="modal-btn btn-repo" target="_blank">
            Baixar
          </a>
        </div>
      `;
    }
  
    // Exibe o modal
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    
    // Previne scrolling na página de fundo
    document.body.style.overflow = 'hidden';
    
    // Fecha o modal ao clicar fora do conteúdo
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        fecharModal();
      }
    });
    
    // Adiciona opção de fechar com tecla ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        fecharModal();
      }
    });
  }
  
  function fecharModal() {
    // Fecha o modal
    document.getElementById('modal').style.display = 'none';
    
    // Restaura scrolling na página
    document.body.style.overflow = '';
    
    // Remove event listeners
    document.removeEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        fecharModal();
      }
    });
  }
  
  // Verifica se o modal deve ser aberto com base na URL
  window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projeto = urlParams.get('projeto');
    
    if (projeto) {
      abrirModal(projeto);
    }
  });