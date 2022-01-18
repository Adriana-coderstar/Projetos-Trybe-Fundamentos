let divFather = document.querySelector('#color-palette');
let pixelBoard = document.getElementById('pixel-board');
let colorPalette = document.querySelectorAll('.color');
let inputValue = document.getElementById('board-size');
let buttonVqv = document.getElementById('generate-board');
let numberPixel = 5;

//requisito 2 e 3
function createPaletteColor() {
  //Passando for para paleta de cores e criando div "color" para paletas de cores como filha da div "color-palette"
  for (let i = 0; i < 4; i += 1) {
    const paletteListColor = [
      'black',
      generateRandomColor(),
      generateRandomColor(),
      generateRandomColor(),
    ];
    const divPaletteChild = document.createElement('div');
    divPaletteChild.className = 'color';
    divPaletteChild.style.backgroundColor = paletteListColor[i];
    divFather.appendChild(divPaletteChild);
  }
};
createPaletteColor();

//Requisito 4 e 5
function createPixels(numberPixel) {
  //Calculo para alterar o tamanho da section
  pixelBoard.style.width = `${40 * numberPixel}px`;
  let multiplesPixels = numberPixel * numberPixel;

  for (let i = 0; i < multiplesPixels; i++) {
    const elementPixel = document.createElement('div');
    elementPixel.className = 'pixel';
    pixelBoard.appendChild(elementPixel);
  }
  // Requisito 6 - Definindo o selected na cor primeira cor (black)
  let firstColor = document.querySelector('.color');
  firstColor.classList.add('selected');

  // Requisito 8 - Seleciona uma cor no palette e preenche a cor selecionada no pixel
  pixelBoard.addEventListener('click', (e) => 
  e.target.style.backgroundColor = document.getElementsByClassName('selected')[0].style.backgroundColor )
};
createPixels(numberPixel);

// Requisito 7
function removeAndSelect() {
  divFather.addEventListener('click', function (e) {
    let selectColor = document.querySelector('.selected');
    selectColor.classList.remove('selected');
    e.target.classList.add('selected');
  });
};
removeAndSelect();

function clearColor() {
  let buttonClear = document.getElementById('clear-board');
  let pixelWhite = document.querySelectorAll('.pixel');

  buttonClear.addEventListener('click', () => {
    pixelWhite.forEach((element) => element.style.backgroundColor = 'white' )
  });
};
clearColor();

function removeDiv() {
  let pixelColor = document.querySelectorAll('.pixel');
    pixelColor.forEach((element) => element.parentNode.removeChild(element))
};

//Requisito 10
// Adiciona pixels conforme digitado no input
function addPixels() {
  buttonVqv.addEventListener('click', () =>  { 
    removeDiv()
    createPixels(inputValue.value);
    clearColor();
    messageError();
  });
};
addPixels();

//Requisito 11

function messageError() {
  
  if (inputValue.value === '') {
    alert("Board inválido!")
    removeDiv()
    createPixels(5);
  } if (inputValue.value < 5) {
    removeDiv()
    createPixels(5);
    clearColor();
  } if (inputValue.value > 50) {
    removeDiv()
    createPixels(50);
    clearColor();
  }
};

//requisito 12
//criar números randomicos para rgb da paleta de cores
function generateRandomColor() {
  let rgb = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
  return rgb;
};
