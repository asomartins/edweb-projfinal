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

//Adiciona estilos novos para criar um dark mode
// Background e cores de fonte do body e demais containers

document
  .querySelectorAll('body, .navbar, .navbar-brand, .nav-link, .card, #contato')
  .forEach((elemento) => {
    elemento.style.setProperty('background-color', '#01080e', 'important');
    elemento.style.setProperty('color', '#91D5F2', 'important');
  });

//Adiciona o background separadamente no container sobre através do id, evitando conflito de estilos
const secaoSobre = document.getElementById('sobre');
secaoSobre.style.cssText =
  'background-color: #01080e !important; padding: 0; border-radius: 0;';

document.querySelectorAll('.nav-link, p, ul').forEach((elemento) => {
  elemento.style.setProperty('color', '#C3DAE8');
});

// Margem nos cabeçalhos para evitar que os cards se sobreponham aos títulos
document.querySelectorAll('h2').forEach((elemento) => {
  elemento.style.setProperty('margin-bottom', '30px', 'important');
});

// Botão voltar ao top

const button = document.createElement('button');
button.innerText = 'Voltar ao Topo';
button.style.cssText = `
    background: linear-gradient(135deg, rgba(255, 0, 127, 0.8), rgba(107, 44, 145, 0.6), rgba(0, 157, 224, 0.5)) !important;    
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: none;
    z-index: 1000;
`;

document.body.appendChild(button);

// Mostrar/ocultar botão ao dar scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

// Voltar ao topo ao clicar no botão
button.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Estilo dos botões dos cards
document.querySelectorAll('.btn-primary').forEach((button) => {
  button.style.cssText =
    'background: linear-gradient(135deg, rgba(255, 0, 127, 0.8), rgba(107, 44, 145, 0.6), rgba(0, 157, 224, 0.5)) !important; border: none;';

  // Evento de hover (mouseenter) para alterar o gradiente
  button.addEventListener('mouseenter', () => {
    button.style.cssText =
      'background: linear-gradient(135deg, rgba(255, 0, 127, 1), rgba(107, 44, 145, 0.8), rgba(0, 157, 224, 0.7)) !important; border: none;';
  });

  // Volta a cor original ao sair do hover (mouseleave)
  button.addEventListener('mouseleave', () => {
    button.style.cssText =
      'background: linear-gradient(135deg, rgba(255, 0, 127, 0.8), rgba(107, 44, 145, 0.6), rgba(0, 157, 224, 0.5)) !important; border: none;';
  });
});

// Bg footer
document
  .querySelector('footer')
  .style.setProperty(
    'background',
    'linear-gradient(180deg, #01080e, #061a2b)',
    'important',
  );

// Função que carrega as fontes do google

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

const scriptBootstrap = document.createElement('script');
scriptBootstrap.src =
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
scriptBootstrap.integrity =
  'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
scriptBootstrap.crossOrigin = 'anonymous';
document.head.appendChild(scriptBootstrap);

// Carrega as fontes
loadGoogleFonts('Montserrat', 'Raleway');

/* Na ausência da imagem da logo original, a logo foi recriada com
fontes semelhantes e texto em branco para sobrepor o bg darkmode
*/

// Seleciona o elemento navbar-brand, classe do bootstrap para logos
const navbarBrand = document.querySelector('.navbar-brand');
navbarBrand.style.cssText =
  'display: flex; align-items: center; gap: 15px; color: #fff';

// Cria o container do logo
const logoContainer = document.createElement('div');
logoContainer.style.cssText = 'display: flex; align-items: center; gap: 10px';

// Cria a tag img e aplica os estilos para a logo
const logo = document.createElement('img');
logo.src = 'images/logo_cesae.png';
logo.alt = 'Logo Cesae';
logo.style.height = '70px';
logo.style.width = '50px';

// Cria o container esquerdo para os textos cesae digital
const textContainerLeft = document.createElement('div');
textContainerLeft.style.cssText =
  'display: flex; flex-direction: column; line-height: 1.2; font-family: "Raleway", sans-serif;';

// Estilos dos spans 'cesae' e 'digital'
const spanLogoTop = document.createElement('span');
spanLogoTop.textContent = 'cesae';
spanLogoTop.style.cssText = 'font-weight: 700; font-size: 1.6rem;';

const spanLogoBottom = document.createElement('span');
spanLogoBottom.textContent = 'digital';
spanLogoBottom.style.cssText = 'font-size: 1.6rem; font-weight: 100;';

// Container direito para o slogan da logo
const textContainerRight = document.createElement('div');
textContainerRight.style.cssText =
  'display: flex; flex-direction: column; text-align: left; font-size: 1rem; font-weight: 300; padding-top: 10px; font-family: "Montserrat", sans-serif;';

// Dois spans para dividir o texto
const spanTextTop = document.createElement('span');
spanTextTop.textContent = 'Centro para o Desenvolvimento';

const spanTextBottom = document.createElement('span');
spanTextBottom.textContent = 'de Competências Digitais';

// Adiciona os spans nos containers
[
  [textContainerLeft, [spanLogoTop, spanLogoBottom]],
  [textContainerRight, [spanTextTop, spanTextBottom]],
].forEach(([container, elements]) =>
  elements.forEach((el) => container.appendChild(el)),
);

// Estrutura os elementos dentro da navbar-brand
navbarBrand.innerHTML = '';
logoContainer.append(logo, textContainerLeft);
navbarBrand.append(logoContainer, textContainerRight);

//Seção sobre

//Função utilitária para adicionar novos itens ao final de uma lista
function adicionarElementoLista(texto, lista) {
  let itemLista = document.createElement('li');
  itemLista.textContent = texto;
  lista.appendChild(itemLista);
}

//Seleciona a lista no texto do sobre
const listaCursos = document.querySelector('#sobre ul');

//adiciona os novos cursos na lista através da função
adicionarElementoLista('Comunicação Digital', listaCursos);
adicionarElementoLista('Formação de formadores', listaCursos);

/* Cards ajustados com a mesma altura e largura
/* Utilização da propriedade object-fit para manter a proporção inicial da imagem e cortar os excessos para não distorcer */
document.querySelectorAll('.card-img-top').forEach((cardimg) => {
  cardimg.style.setProperty('width', '100%');
  cardimg.style.setProperty('height', '200px');
  cardimg.style.setProperty('object-fit', 'cover');
});

//Adiciona borda aos cards
document.querySelectorAll('.card').forEach((card) => {
  card.style.setProperty('border', '1px solid #91D5F2', 'important');
});

//Função para inserir um carrossel do bootstrap em uma div

function inserirCarrossel(div) {
  div.innerHTML = ` <!-- Carrossel fotos -->
      <div class="carousel slide" data-bs-ride="carousel" id="ads">
        <div class="carousel-indicators">
          <button class="active" data-bs-target="#ads" data-bs-slide-to="0"></button>
          <button data-bs-target="#ads" data-bs-slide-to="1"></button>
          <button data-bs-target="#ads" data-bs-slide-to="2"></button>

        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src="images/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador_23-2150010136.jpg" alt="Cesae Digital" class="img-fluid">
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="images/pessoa-na-frente-do-computador-trabalhando-html_23-2150040428.jpg" alt="Cesae Digital" class="img-fluid">
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="images/homem-de-codificacao_1098-18084.jpg" alt="Cesae Digital" class="img-fluid">
          </div>
        </div>
        <button class="carousel-control-prev" data-bs-target="#ads" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" data-bs-target="#ads" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
      <!-- Fim - Carrossel fotos -->`;
}

const containerCarrossel = document.createElement('div');
containerCarrossel.classList.add('container-carrossel');
secaoSobre.prepend(containerCarrossel);

inserirCarrossel(containerCarrossel);
