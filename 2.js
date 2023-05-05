const sum = document.querySelector(".sum").value;
const button = document.querySelector(".button");
const total = document.querySelector(".total");

let interestRate = 18.5;

let deposit = 30000;

let growth = 150;

const currency = "руб";

console.log(
  `Ваш депозит на начало расчетного периода составлял ${deposit} &{currency}`
); // Ваш депозит на начало расчетного периода составлял 30000 руб

console.log(
  `Cогласно вашему тарифу, вам была присвоена ставка ${interestRate}%`
);
// Согласно вашему тарифу, вам была присвоена ставка 18.5%

console.log(
  `К концу расчетного прирост составил ${growth} ${currency} и на данный момент ваш депозит составляет ${
    deposit + growth
  } ${currency}`
); // К концу расчетного прирост составил 150 руб и на данный момент ваш депозит составляет 30150 руб

interestRate = 7;

button.addEventListener("click", () => {
  let sum = document.querySelector(".sum").value;
  if (Number(sum) >= 0) {
    sum = Number(sum) + (Number(sum) * Number(interestRate)) / 100;
    total.textContent = `Через год у вас будет ${sum} ${currency} на счету`; // Через год у вас будет XXX руб. на счету", где вместо ХХХ выведите сколько получится на счету с учетом процентной ставки 7% годовых
  }
});
