let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

   tg.expand(); //расширяем на все окно  

   tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
   tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
   tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
   tg.MainButton.color = "#143F6B"; //изменяем цвет бэкграунда кнопки
   tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

   let btn = document.getElementById("form1"); //получаем кнопку скрыть/показать 

   btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
      if (tg.MainButton.isVisible){ //если кнопка показана 
        tg.MainButton.hide() //скрываем кнопку 
        let fio = document.getElementById("fio1");
        let phone = document.getElementById("phone1");
        let email = document.getElementById("email1");
        // tg.sendData(JSON.stringify({fio: fio.value}, {phone: phone.value}, {email: email.value}))
        // tg.sendData(fio, phone, email)
      }
      else{ //иначе
         tg.MainButton.show() //показываем 
      }
   });



   Telegram.WebApp.onEvent('mainButtonClicked', function(){
      let fio = document.getElementById("fio1");
      let phone = document.getElementById("phone1");
      let email = document.getElementById("email1");
      tg.sendData(JSON.stringify({fio: fio.value}, {phone: phone.value}, {email: email.value}))
    //   tg.sendData(fio, phone, email); 
      //при клике на основную кнопку отправляем данные в строковом виде
   });


//    let usercard = document.getElementById("usercard"); //получаем блок usercard 

//    let profName = document.createElement('p'); //создаем параграф
//    profName.innerText = `${tg.initDataUnsafe.user.first_name}
//    ${tg.initDataUnsafe.user.last_name}
//    ${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
//    //выдем имя, "фамилию", через тире username и код языка
//    usercard.appendChild(profName); //добавляем 

//    let userid = document.createElement('p'); //создаем еще параграф 
//    userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
//    usercard.appendChild(userid); //добавляем


   //работает только в attachment menu
   // let pic = document.createElement('img'); //создаем img
   // pic.src = tg.initDataUnsafe.user.photo_url; //задаём src 
   // usercard.appendChild(pic); //добавляем элемент в карточку 