let credit = 35500;
let pricePerDroid = 3000;
let totalPrice;
let notEnough = "Недостаточно средств на счету";
let input = prompt("Введите количество дроидов, которых вы хотите купить.");

if (input === null) {
  alert("Отменено пользователем");
} else {
  totalPrice = input * pricePerDroid;

  if (totalPrice > credit) {
    alert("Недостаточно средств на счету");
  } else {
    let rest = credit - totalPrice;
    alert(`Вы купили ${input} дроидов, на чету осталось ${rest}кредитов.`);
  }
}
