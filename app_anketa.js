let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

   tg.expand(); //расширяем на все окно  

   tg.MainButton.text = "Отправить"; //изменяем текст кнопки 
//    tg.MainButton.setText("Changed Text1"); //изменяем текст кнопки иначе
tg.MainButton.textColor = "#ffffff"; //изменяем цвет текста кнопки
//    tg.MainButton.textColor = "#F55353"; //изменяем цвет текста кнопки
   tg.MainButton.color = "#008000"; //изменяем цвет бэкграунда кнопки  #143F6B
//    tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

   let btn = document.getElementById("form1"); //получаем кнопку скрыть/показать 
   tg.MainButton.show()
//    btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
//       if (tg.MainButton.isVisible){ //если кнопка показана 
//         tg.MainButton.hide() //скрываем кнопку 
//         let fio = document.getElementById("fio1");
//         let phone = document.getElementById("phone1");
//         let email = document.getElementById("email1");
//         // tg.sendData(JSON.stringify({fio: fio.value}, {phone: phone.value}, {email: email.value}))
//         // tg.sendData(fio, phone, email)
//       }
//       else{ //иначе
//          tg.MainButton.show() //показываем 
//       }
//    });

   Telegram.WebApp.onEvent('mainButtonClicked', function(){

      let q1 = document.getElementById("q1");
      let q2 = document.getElementById("q1");
      let q3 = document.getElementById("q1");
      let q4 = document.getElementById("q1");
      let q5 = document.getElementById("q1");

      tg.sendData(JSON.stringify({
         q1: q1.value, 
         q2: q2.value, 
         q3: q3.value, 
         q4: q4.value, 
         q5: q5.value,                   
      }))
    //   let push = fio.value + "::" + phone.value + "::" + email.value
    //   tg.sendData(push)
    //   tg.sendData({fio: fio.value, phone: phone.value, email: email.value})
    //   tg.sendData(JSON.stringify({fio: fio.value, phone: phone.value, email: email.value}))
      tg.MainButton.hide()  
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