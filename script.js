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

// Background do body e dos demais containers
document
  .querySelectorAll(
    'body, .navbar, .navbar-brand, .nav-link, #sobre, .card, #contato',
  )
  .forEach((elemento) => {
    elemento.style.setProperty('background-color', '#01080e', 'important');
    elemento.style.setProperty('color', '#91D5F2', 'important');
  });

// Estilo dos botões dos cards
document.querySelectorAll('.btn-primary').forEach((button) => {
  button.style.setProperty(
    'background',
    'linear-gradient(135deg, rgba(255, 0, 127, 0.8), rgba(107, 44, 145, 0.6), rgba(0, 157, 224, 0.5))',
    'important',
  );

  // Evento de hover (mouseenter) para alterar o gradiente
  button.addEventListener('mouseenter', () => {
    button.style.setProperty(
      'background',
      'linear-gradient(135deg, rgba(255, 0, 127, 1), rgba(107, 44, 145, 0.8), rgba(0, 157, 224, 0.7))',
      'important',
    );
  });

  // Volta a cor original ao sair do hover (mouseleave)
  button.addEventListener('mouseleave', () => {
    button.style.setProperty(
      'background',
      'linear-gradient(135deg, rgba(255, 0, 127, 0.8), rgba(107, 44, 145, 0.6), rgba(0, 157, 224, 0.5))',
      'important',
    );
  });
});

document
  .querySelector('footer')
  .style.setProperty(
    'background',
    'linear-gradient(180deg, #01080e, #061a2b)',
    'important',
  );
/* Estilo da logo recriado com:
  fontes semelhantes à logo original
 texto da logo em branco para sobrepor o bg darkmode
*/

function loadGoogleFonts(...fonts) {
  // Cria e adiciona a preconexão com Google Fonts
  const preconnect1 = document.createElement('link');
  preconnect1.rel = 'preconnect';
  preconnect1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(preconnect1);

  const preconnect2 = document.createElement('link');
  preconnect2.rel = 'preconnect';
  preconnect2.href = 'https://fonts.gstatic.com';
  preconnect2.crossOrigin = 'anonymous';
  document.head.appendChild(preconnect2);

  // Cria links individuais para cada fonte
  fonts.forEach((font) => {
    const formattedFont =
      font.replace(/ /g, '+') + ':ital,wght@0,100..900;1,100..900';
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${formattedFont}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  });
}

// Carrega as fontes
loadGoogleFonts('Montserrat', 'Raleway');

// Seleciona o elemento navbar-brand
const navbarBrand = document.querySelector('.navbar-brand');
navbarBrand.style.display = 'flex';
navbarBrand.style.alignItems = 'center';
navbarBrand.style.gap = '15px';
navbarBrand.style.color = '#fff';

// Criar o container da logo
const logoContainer = document.createElement('div');
logoContainer.style.display = 'flex';
logoContainer.style.alignItems = 'center';
logoContainer.style.gap = '10px';

// Cria a tag img e aplica os estilos para a logo
const logo = document.createElement('img');
logo.src = 'images/logo_cesae.png';
logo.alt = 'Logo Cesae';
logo.style.height = '70px';
logo.style.width = '50px';

// Cria o container esquerdo para os textos cesae e digital
const textContainerLeft = document.createElement('div');
textContainerLeft.style.display = 'flex';
textContainerLeft.style.flexDirection = 'column';
textContainerLeft.style.lineHeight = '1.2';
textContainerLeft.style.fontFamily = "'Raleway', sans-serif";

// Estilos dos spans 'cesae' e 'digital'
const spanLogoTop = document.createElement('span');
spanLogoTop.textContent = 'cesae';
spanLogoTop.style.fontWeight = '700';
spanLogoTop.style.fontSize = '1.6rem';

const spanLogoBottom = document.createElement('span');
spanLogoBottom.textContent = 'digital';
spanLogoBottom.style.fontSize = '1.6rem';
spanLogoBottom.style.fontWeight = '100';

// Container direito para o texto longo
const textContainerRight = document.createElement('div');
textContainerRight.style.display = 'flex';
textContainerRight.style.flexDirection = 'column';
textContainerRight.style.textAlign = 'left';
textContainerRight.style.fontWeight = '300';
textContainerRight.style.paddingTop = '10px';
textContainerRight.style.fontFamily = "'Montserrat', sans-serif";

// Dois spans para dividir o texto
const spanTextTop = document.createElement('span');
spanTextTop.textContent = 'Centro para o Desenvolvimento';
spanTextTop.style.display = 'block';
spanTextTop.style.fontSize = '1rem';

const spanTextBottom = document.createElement('span');
spanTextBottom.textContent = 'de Competências Digitais';
spanTextBottom.style.display = 'block';
spanTextBottom.style.fontSize = '1rem';

// Adiciona os spans dentro dos containers
textContainerLeft.appendChild(spanLogoTop);
textContainerLeft.appendChild(spanLogoBottom);

// Adiciona os spans ao container da direita
textContainerRight.appendChild(spanTextTop);
textContainerRight.appendChild(spanTextBottom);

// Estrutura os elementos dentro da navbar-brand
navbarBrand.innerHTML = '';
navbarBrand.appendChild(logoContainer);
logoContainer.appendChild(logo);
logoContainer.appendChild(textContainerLeft);
navbarBrand.appendChild(textContainerRight);

// Cinza Azul Claro: #C3DAE8 → Um branco frio, levemente azulado, que se harmoniza bem com dark mode.
// Cinza Suave: #D4D8E2 → Mais próximo do branco, mas sem ser tão brilhante.
// Azul Gelo: #B0D0F0 → Um azul bem clarinho, mantendo a coerência com o esquema de cores.
// Branco Suave: #E0E5EC → Uma alternativa ao branco puro, sem ser muito intensa.
