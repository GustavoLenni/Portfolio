document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Remove a classe 'clicked' de todos os links
    document.querySelectorAll('.nav-list a').forEach(a => a.classList.remove('clicked'));

    // Adiciona a classe 'clicked' ao link atual
    this.classList.add('clicked');

    // Navega para a seção correspondente após o clique
    const targetId = this.getAttribute('href').substring(1); // Remove o # do href
    const targetElement = document.getElementById(targetId);

    // Calcula a altura do cabeçalho
    const headerHeight = document.querySelector('.nav').offsetHeight;

    // Scroll até a posição ajustada
    window.scrollTo({
      top: targetElement.offsetTop - headerHeight - 10, // Subtrai o headerHeight e um pequeno extra
      behavior: 'smooth'
    });
  });
});
