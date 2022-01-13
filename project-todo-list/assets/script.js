const addButton = document.getElementById('criar-tarefa');
const addInput = document.getElementById('texto-tarefa'); 
const listOrd = document.getElementById('lista-tarefas');
const taskCreate = document.getElementsByTagName('li');
const clearFinalist = document.getElementById('remover-finalizados');
const deletList = document.getElementById('apaga-tudo');
const moverCima = document.getElementById('mover-cima');
const moverBaixo = document.getElementById('mover-baixo');
const removeSelect = document.getElementById('remover-selecionado');
const data = document.getElementById('date');


function inputTask() {
  addButton.addEventListener('click', function () {
    let li = document.createElement('li');
    li.innerText = addInput.value;
    addInput.value = "";
    listOrd.appendChild(li);
    addEvent();
    removeSelector()
  });
}
inputTask()

function addEvent() {
  for (let index = 0; index < taskCreate.length; index += 1) {
    taskCreate[index].addEventListener('click', function () {
      removeSelector()
      taskCreate[index].classList.add('select')
      taskCreate[index].style.backgroundColor = 'rgba(222, 227, 226, 0.5)';
      });
  }
}

function removeSelector() {
  for (let index = 0; index < taskCreate.length; index += 1) {
    taskCreate[index].style.backgroundColor = "";
    taskCreate[index].classList.remove('select')
  }
}

// requisito 9
function styleLine(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
    event.target.style.textDecoration = "none";
  } else {
    event.target.classList.add('completed');
    event.target.style.textDecoration = "line-through";
  }
}
  listOrd.addEventListener('dblclick', styleLine);

// requisito 10

function clearList(){
  listOrd.innerHTML = "";
}
deletList.addEventListener('click', clearList);

// requisito 11
function removeThrough(){
  const throughClear = document.querySelectorAll('.completed');

  for(let deletThrough of throughClear){
    deletThrough.remove();
  }
}
clearFinalist.addEventListener('click', removeThrough);

// requisito 12

const buttonSaveTasks = document.getElementById('salvar-tarefas');

function savedTaskList(){
  let orderedList = listOrd.innerHTML
  localStorage.setItem('list-save', orderedList);
}

buttonSaveTasks.addEventListener('click', savedTaskList);

window.onload = () =>{
  listOrd.innerHTML = localStorage.getItem('list-save');
  addEvent()
}

// requisito 13
function moveUp() {
  const selectItem = document.querySelector('.select');
  if(!selectItem) return;
  if(selectItem.previousElementSibling) {
    selectItem.parentNode.insertBefore(selectItem, selectItem.previousElementSibling);
  }
}
moverCima.addEventListener('click', moveUp)

function moveDown() {
  const selectItem = document.querySelector('.select');
  if(!selectItem) return;
  const selectNextElement = selectItem.nextElementSibling;
  const selectParent = selectNextElement.parentNode
  
  if(selectNextElement) selectParent.insertBefore(selectNextElement, selectItem)  
}
moverBaixo.addEventListener('click', moveDown)

// Requisito 14
function deleteSelect() {
  const selectItem = document.querySelector('.select');
  if(selectItem) return selectItem.remove();
}

removeSelect.addEventListener('click', deleteSelect)

// Inserir data
function displayTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.querySelector('.clock').textContent = time;
  
  const formatter = Intl.DateTimeFormat('pt-BR', {
    weekday: "long",
    year:"numeric",
    month:"long",
    day:"numeric",
  });
  
  data.innerHTML = formatter.format();
}

displayTime();
const createClock = setInterval(displayTime, 1000);

