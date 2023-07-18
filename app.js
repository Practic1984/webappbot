const formElement = document.getElementById('textinput'); // извлекаем элемент формы
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
  // теперь можно извлечь данные
  const name = formData.get('fio'); // fio
  const surname = formData.get('phone'); // phone
});