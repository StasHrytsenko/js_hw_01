const ADMIN_PASSWORD = 1234;
let message;

let input = prompt("Введите пароль администратора");

if (input === null) {
  message = "Отменено пользователем!";
} else if (input === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);

// Когда вводишь верный и неверный пароль выдает сообщение "Доступ запрещен, неверный пароль!"
