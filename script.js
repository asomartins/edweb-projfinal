// Validação do formulário de contato
document
  .getElementById('formulario-contato')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    if (nome == '' || email == '') {
      alert('Por favor, preencha todos os campos obrigatórios.');
    } else {
      alert('Formulário enviado com sucesso!');
    }
  });

// Animação dos cards dos cursos
const cards = document.querySelectorAll('#cursos .card');

cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.1)';
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1.0)';
  });
});

//Adicionando estilos novos para criar um visual dark mode

//background do body e dos demais containers
document
  .querySelectorAll(
    'body, .navbar, .navbar-brand, .nav-link, #sobre, .card, #contato',
  )
  .forEach((elemento) => {
    elemento.style.setProperty('background-color', '#01080e', 'important');
    elemento.style.setProperty('color', '#91D5F2', 'important');
  });

document
  .querySelector('.btn-primary')
  .style.setProperty(
    'background',
    'linear-gradient(45deg, #9C237A, #E1007D)',
    'important',
  );

//cores logo cesae:

//cor do texto  #91D5F2
//#483470
