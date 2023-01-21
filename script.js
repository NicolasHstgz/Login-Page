let inputLogin = document.querySelector('.login');
let inputPassword = document.querySelector('.password');
let button = document.querySelector('.submit')

let login = "teste@gmail.com";
let password = "1234";

let i = 1;

function verifica() {

  if(inputLogin.value == login && inputPassword.value == password) {
    alert("Bem Vindo " + login)
  } else if(i > 3) {
    alert("Acesso bloqueado!")
    login = null;
    password = null;
  } else {
    alert("Acesso negado, tentativas restantes: " + (3 - i))
    i = i + 1;
  }
    
}

button.onclick = verifica;