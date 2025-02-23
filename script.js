/************ Head  **************/

// Seleciona o elemento link existente que carrega o Bootstrap
const existingLink = document.querySelector('link[href*="bootstrap"]');

//Atualiza a versão do bootstrap pois o link do bootstrap do html original está em uma versão anterior

// Verifica se o link existe e atualiza o href
if (existingLink) {
  existingLink.href =
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
} else {
  // Se não existir, cria um novo link
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href =
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
  document.head.appendChild(link);
}

// Função para carregar as fontes do google
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

//Adiciona o script do Bootstrap Bundle ao <head> do documento HTML
const scriptBootstrap = document.createElement('script');
scriptBootstrap.src =
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
scriptBootstrap.integrity =
  'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
scriptBootstrap.crossOrigin = 'anonymous';
document.head.appendChild(scriptBootstrap);

/************ Fim - Head  **************/

/************ Navbar  **************/

//Seleciona a navbar e adiciona a um container para centralizar

document.querySelector('.navbar').classList.add('container', 'my-2');

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

//Remove um span que estava com o texto 'current'
document.querySelector('.sr-only').remove();

//Atualiza p/ a classe do bootstrap 5 que alinha os itens de navegação à direita
document.querySelector('.ml-auto').classList.add('ms-auto');
document.querySelector('.ml-auto').classList.remove('ml-auto');

//Animação de sublinhado no menu

document.addEventListener('DOMContentLoaded', function () {
  // Seleciona todos os links da navbar
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach((link) => {
    // Define o estilo base dos links
    link.style.position = 'relative';
    link.style.display = 'inline-block';
    link.style.color = '#91D5F2';
    link.style.textDecoration = 'none';
    link.style.transition = 'color 0.3s';

    // Adiciona o sublinhado como um elemento span
    const underline = document.createElement('span');
    underline.style.position = 'absolute';
    underline.style.bottom = '0';
    underline.style.left = '50%';
    underline.style.transform = 'translateX(-50%)';
    underline.style.width = '0';
    underline.style.height = '2px';
    underline.style.backgroundColor = '#91D5F2';
    underline.style.transition = 'width 0.3s ease';

    link.appendChild(underline);

    // Evento de hover para expandir o sublinhado
    link.addEventListener('mouseover', () => {
      underline.style.width = '100%';
      underline.style.left = '0';
      underline.style.transform = 'translateX(0%)';
    });

    // Evento de mouseout para reduzir o sublinhado
    link.addEventListener('mouseout', () => {
      underline.style.width = '0';
      underline.style.left = '50%';
      underline.style.transform = 'translateX(-50%)';
    });
  });
});

/************ Fim - Navbar **************/

/************ Seção Carrossel **************/

//Função para inserir um carrossel do bootstrap em um elemento
function inserirCarrossel(elemento) {
  elemento.innerHTML = ` <!-- Carrossel fotos -->
      <div class="carousel slide" data-bs-ride="carousel" id="ads">
        <div class="carousel-indicators">
          <button class="active" data-bs-target="#ads" data-bs-slide-to="0"></button>
          <button data-bs-target="#ads" data-bs-slide-to="1"></button>
          <button data-bs-target="#ads" data-bs-slide-to="2"></button>
          <button data-bs-target="#ads" data-bs-slide-to="3"></button>

        </div>
        <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
            <img src="images/img_carousel1.png" alt="Cesae Digital" class="img-fluid">
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="images/img_carousel2.png" alt="Cesae Digital" class="img-fluid">
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="images/img_carousel3.png" alt="Cesae Digital" class="img-fluid">
          </div>
           <div class="carousel-item" data-bs-interval="3000">
            <img src="images/img_carousel4.png" alt="Cesae Digital" class="img-fluid">
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

//Seleciona a section sobre e altera a cor anterior do background do container sobre através do id, evitando conflito de estilos
const secaoSobre = document.getElementById('sobre');
secaoSobre.style.cssText =
  'background-color: #01080e !important; padding: 0; border-radius: 0;';

//Cria uma section para o carrossel e insere antes da section sobre
const secaoCarrossel = document.createElement('section');
secaoCarrossel.id = 'carrossel';
secaoSobre.parentNode.insertBefore(secaoCarrossel, secaoSobre);

//Adiciona o carrossel dentro da section carrossel
inserirCarrossel(secaoCarrossel);

//Posiciona melhor as setas do carrossel
document
  .querySelectorAll('.carousel-control-next, .carousel-control-prev')
  .forEach((control) => {
    control.style.cssText = 'width: 7%';
  });

/************ Fim - Seção Carrossel **************/

/************ Seção Sobre  **************/

// Margem nos cabeçalhos para evitar que os cards se sobreponham aos títulos
document.querySelectorAll('h2').forEach((elemento) => {
  elemento.style.setProperty('margin-bottom', '30px', 'important');
});

//Função utilitária para adicionar novos itens ao final de uma lista
function adicionarElementoLista(texto, lista) {
  let itemLista = document.createElement('li');
  itemLista.textContent = texto;
  lista.appendChild(itemLista);
}

//Seleciona a lista no texto do sobre
const listaCursos = document.querySelector('#sobre ul');

//Adiciona os novos cursos na lista através da função
adicionarElementoLista('Comunicação Digital', listaCursos);
adicionarElementoLista('Formação de formadores', listaCursos);

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

/* Garante que todos os cards tenham a mesma altura */

document.querySelectorAll('.card').forEach((card) => {
  card.style.cssText =
    'display: flex; flex-direction: column; height: 100%; border: 1px solid #91D5F2 !important;';
});

document.querySelectorAll('.card-body').forEach((cardbody) => {
  cardbody.style.cssText =
    'flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;';
});

// Imagens dos cards ajustadas com a mesma altura e largura
// Utilização da propriedade object-fit para manter a proporção inicial da imagem e cortar os excessos para não distorcer
document.querySelectorAll('.card-img-top').forEach((cardimg) => {
  cardimg.style.setProperty('width', '100%');
  cardimg.style.setProperty('height', '200px');
  cardimg.style.setProperty('object-fit', 'cover');
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

/************ Fim - Seção Sobre  **************/

/************ Seção Contato **************/

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

/************ Fim - Seção Contato **************/

// Cria e estiliza o botão voltar ao topo

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

// Adiciona o comportamento de voltar ao topo ao evento click do botão
button.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Background e cores de fonte do body e demais containers
//Adiciona estilos novos para criar um dark mode

document
  .querySelectorAll('body, .navbar, .card, #contato')
  .forEach((elemento) => {
    elemento.style.setProperty('background-color', '#01080e', 'important');
    elemento.style.setProperty('color', '#D7E6F3', 'important');
    elemento.style.setProperty('font-family', '"Montserrat", sans-serif');
  });

//Cores dos links da navbar e outros elementos
document
  .querySelectorAll('.nav-link, h2, .card-title, footer')
  .forEach((elemento) => {
    elemento.style.setProperty('color', '#91D5F2');
  });

// Sobrescreve a cor do background do footer
document
  .querySelector('footer')
  .style.setProperty(
    'background',
    'linear-gradient(180deg, #01080e, #061a2b)',
    'important',
  );
