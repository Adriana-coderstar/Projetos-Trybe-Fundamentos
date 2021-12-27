const buttonL = document.getElementById('button-login');
const email = document.getElementById('email');
const senha = document.getElementById('password');
const buttonSubmit = document.getElementById('submit-btn');
const checkboxAgremeent = document.getElementById('agreement');
const contador = document.getElementById('counter');
const textarea = document.getElementById('textarea');

function buttonLogin() {
  buttonL.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

buttonLogin();

function buttonAgremeent() {
  buttonSubmit.disabled = true;

  checkboxAgremeent.addEventListener('change', (e) => {
    if (e.target.checked) {
      buttonSubmit.disabled = false;
    } else {
      buttonSubmit.disabled = true;
    }
  });
}

buttonAgremeent();

// Referencia do site https://stackoverflow.com/questions/5371089/count-characters-in-textarea

function contadorCarac() {
  textarea.addEventListener('keyup', () => {
    const conterValue = 500 - textarea.value.length;
    contador.innerText = conterValue;
  });
}

contadorCarac();

// Requisito 21
function familyCheck() {
  const family1 = document.querySelectorAll('input[type="radio"]');
  for (let i = 0; i < family1.length; i += 1) {
    if (family1[i].checked) {
      return family1[i].value;
    }
  }
}

function matterCheck() {
  const matter = document.querySelectorAll('input[type="checkbox"]');
  const arrayMatter = [];
  for (let i = 0; i < matter.length; i += 1) {
    if (matter[i].checked) {
      arrayMatter.push(matter[i].value);
    }
  }
  return arrayMatter;
}

function noteCheck() {
  const note = document.querySelectorAll('input[name="rate"]');
  for (let i = 0; i < note.length; i += 1) {
    if (note[i].checked) {
      return note[i].value;
    }
  }
}

buttonSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const form = document.querySelector('#evaluation-form');
  const nome = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const emailInput = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const family3 = familyCheck();
  const matter = matterCheck();
  const avaliacao = noteCheck();
  const observacao = textarea;

  form.innerHTML = `Nome: ${nome} ${lastName} <br>`;
  form.innerHTML += `Email: ${emailInput} <br>`;
  form.innerHTML += `Casa: ${casa} <br>`;
  form.innerHTML += `Família: ${family3} <br>`;
  form.innerHTML += `Matérias: ${matter.join(', ')} <br>`;
  form.innerHTML += `Avaliação: ${avaliacao} <br>`;
  form.innerHTML += `Observações: ${observacao.value}`;
});
