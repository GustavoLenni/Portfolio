function abrirModal(projeto) {
    // Define conteúdo do modal com base no projeto
    let modalInfo = document.getElementById('modal-info');
    
    if (projeto === 'refeitorio') {
      modalInfo.innerHTML = `
        <h2>Projeto Refeitório</h2>
        <img src="./images/refeitorio-banner.png" alt="Projeto Refeitório">
        <p>O Projeto Refeitório é um projeto educativo criado para a rede SESI de Ferraz...</p>
      `;
    } else if (projeto === 'orcamento') {
      modalInfo.innerHTML = `
        <h2>Projeto Orçamento Amigo</h2>
        <img src="./images/Orcamento-banner.png" alt="Projeto Orçamento Amigo">
        <p>Orçamento Amigo é um sistema para gerenciar suas compras com maior facilidade...</p>
      `;
    }
  
    // Exibe o modal
    document.getElementById('modal').style.display = 'flex';
  }
  
  function fecharModal() {
    // Fecha o modal
    document.getElementById('modal').style.display = 'none';
  }
  