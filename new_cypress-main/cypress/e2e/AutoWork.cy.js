describe('Проверка авторизации', function () {

  it('Верный пароль и верный логин', function () {
       cy.visit('https://login.qa.studio'); // Заходим на сайт
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверям кнопку
       cy.get('#mail').type('german@dolnikov.ru'); // вводим мэйл
       cy.get('#pass').type('iLoveqastudio1'); // вводим пароль
       cy.get('#loginButton').click(); // нажимаем войти
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем текст
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик
   })

   it('Восстановление пароля', function () {
    cy.visit('https://login.qa.studio'); // Заходим на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяем кнопку
    cy.get('#forgotEmailButton').click(); // Кнопка
    cy.get('#mailForgot').type('german@dolnikov.ru'); // Вводим мэйл
    cy.get('#restoreEmailButton').click(); // Кнопка
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // сверка текста
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
})

it('Верный логин и неверный пароль', function () {
  cy.visit('https://login.qa.studio'); // Заходим на сайт
  cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверям кнопку
  cy.get('#mail').type('german@dolnikov.ru'); // Вводим мэйл
  cy.get('#pass').type('iLoveqastudio2'); // вводим пароль
  cy.get('#loginButton').click(); // кнопка
  cy.get('#messageHeader').should('be.visible'); 
  cy.get('#messageHeader').contains('Такого логина или пароля нет'); // сверка текста
  cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
})

   it('Не верный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio'); // заходим на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет нопка
    cy.get('#mail').type('german@dolniko.ru'); // Вводим мэйл
    cy.get('#pass').type('iLoveqastudio1'); // вводим пароль 
    cy.get('#loginButton').click(); // кнопка 
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка текста
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
})

   it('Валидация на наличие @', function () {
       cy.visit('https://login.qa.studio'); // Заходим на сайт
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяем кнопку на цвет
       cy.get('#mail').type('germandolnikov.ru'); // Вводим мэйл
       cy.get('#pass').type('iLoveqastudio1'); // Вводим пароль
       cy.get('#loginButton').click(); // кнопка
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // сверка текста
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
   })
   
   it('Логин вписан со строчными буквами и правильным паролем', function () {
    cy.visit('https://login.qa.studio'); // заходим на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Вводим мэйл
    cy.get('#pass').type('iLoveqastudio2'); // Вводим пароль
    cy.get('#loginButton').click(); // Кнопка
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Сверка текста
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
})

})



