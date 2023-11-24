//в начале идет задание со *
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

//отсюда идет основное задание

const form = document.querySelector(".form");
const nameInput = document.querySelector("#name");
const secondNameInput = document.querySelector("#secondName");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const agreeInput = document.querySelector("#agree");


form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();
  // галочка с согласием на обработку информации обязательна, так что "agree": true будет верно для всех
  // по умолчанию, но предположим, что это не так и ее можно или поставить, или нет
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
         А пока можете записать еще кого-нибудь - очередь-то кророткая ;)`;
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