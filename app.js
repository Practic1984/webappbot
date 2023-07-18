
let tg = window.Telegram.WebApp;
tg.expand();

const formElement = document.getElementById('form1'); // извлекаем элемент формы
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
  // теперь можно извлечь данные
  const fio = formData.get('fio'); // fio
  const phone = formData.get('phone'); // phone
  console.log(fio, phone)
  Telegram.WebApp.onEvent('mainButtonClicked', function(){
    tg.sendData(fio)
    tg.sendData(phone)
  }
});

// let tg = window.Telegram.WebApp;
// tg.expand();
// let item = "";
// let fio = document.getElementById("fio1");
// let phone = document.getElementById("phone1");
// let email = document.getElementById("email");

