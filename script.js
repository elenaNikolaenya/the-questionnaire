//here is the 5th part of the task
const askBtn = document.querySelector("#ask");
const messageBox = document.querySelector("#message-container");
const messageText = document.querySelector("#message");
const greetingPage = document.querySelector("#greeting");
const okBtn = document.querySelector("#ok");
const questionnaire = document.querySelector("#questionnaire");

askBtn.addEventListener('click', showLast);

function showLast() {
  let message = '';

  fetch('https://polinashneider.space/my-users', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: elenaNikolaenya'
    }
  })
  .then((result) => result.json())
  .then((users) => {    
    if (users.length) {
      fetch('https://polinashneider.space/last-user', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer: elenaNikolaenya'
        }
      })
      .then((result) => result.json())
      .then((user) => {
        message = `Перед вами ${user['name']} ${user['secondName']}. Заполните анкету и будьте следующим!`;
        showMessage(message, greetingPage);
      })
      .catch((error) => {
        console.log(error);
        message = 'Извините, что-то пошло не так... Но вы все равно попробуйте заполнить анкету :)';
        showMessage(message, greetingPage);
      })
    } else {
      message = 'А никого и нет! Вы будете первым!';
      showMessage(message, greetingPage);
    }             
  })
  .catch((error) => {
    console.log(error);
    message = 'Извините, что-то пошло не так... Но вы все равно попробуйте заполнить анкету :)';
    showMessage(message, greetingPage);
  })  
}

function showMessage(text, whatToHide) {
  whatToHide.classList.add('hidden');
  messageText.textContent = text;  
  messageBox.classList.remove('hidden');
}

okBtn.addEventListener('click', () => {
  messageBox.classList.add('hidden');
  questionnaire.classList.remove('hidden');
})

//here starts the main part of the task

const form = document.querySelector(".form");
const nameInput = document.querySelector("#name");
const secondNameInput = document.querySelector("#secondName");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const agreeInput = document.querySelector("#agree");


form.addEventListener("submit", (event) => {
    event.preventDefault();
  // checkbox is required, so always there will be    "agree": true  
  // but let's assume that the mark at checkbox is not requred and we have options
  let agreeStatus = null;
  if (agreeInput.checked) {
    agreeStatus = true;
  } else {
    agreeStatus = false;
  }   

  fetch(`https://polinashneider.space/user`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: elenaNikolaenya'
    },
    body: JSON.stringify({
      "name": nameInput.value.trim(),
      "secondName": secondNameInput.value.trim(),
      "phone": phoneInput.value.trim(),
      "email": emailInput.value.trim(),
      "agree": agreeStatus
    })
  }) 
  .then((response) => {
    if (response.ok) {
      fetch('https://polinashneider.space/my-users', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer: elenaNikolaenya'
        }
      })
      .then((result) => result.json())
      .then((users) => {
        message = `Ваш номер в очереди ${users.length}! Мы с вами свяжемся)
         А пока можете записать еще кого-нибудь - очередь-то короткая ;)`;
        showMessage(message, questionnaire);
        form.reset();
      })    
    } else {
      message = `Ошибка ${response.status}`;
      showMessage(message, questionnaire);
    }    
  })
  .catch((error) => {
    console.log(error);
    message = 'Извините, что-то пошло не так... Может, попробуете еще раз?';
    showMessage(message, questionnaire);
  })
});