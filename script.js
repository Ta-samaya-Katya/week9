// 1 задание
const cleanersIncome = 40000;
const teachersIncome = 22000;
console.log(cleanersIncome + teachersIncome);
// 2 вариант:
console.log(`${cleanersIncome + teachersIncome}`);

// 2 задание
const city = "Владивосток";
const n = 2000;
console.log(city + " " + n);
// 2 вариант:
console.log(`${city} ${n}`);

// 3 задание
const messenger = 128;
const photos = 254;
const Vkontakte = 137;
const YouTube = 201;
console.log((messenger + photos + Vkontakte + YouTube) / 60);
// 2 вариант:
console.log(`${(messenger + photos + Vkontakte + YouTube) / 60}`);

// 4 задание
const N = 2;
console.log(N ** 5);
// 2 вариант:
console.log(`${N ** 5}`);

// 5 задание
const saying =
  "Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!";
console.log(saying);
// 2 вариант:
console.log(`${saying}`);

// 6 задание
const greetings = "Привет";
const names = "Кот";
console.log(greetings + ", " + names);
// 2 вариант:
console.log(`${greetings}, ${names}`);

// 7 задание
let time = 34;
let message = "Старт поездки. Осталось минут: ";
console.log(message + time);
// 2 вариант:
console.log(`${message}${time}`);

time = time - 15;
message = "Немного сторис в соцсетях. Осталось минут: ";
console.log(message + time);
// 2 вариант:
console.log(`${message}${time}`);

time = time - 10;
message = "Немного не новостей, но событий. Осталось минут: ";
console.log(message + time);
// 2 вариант:
console.log(`${message}${time}`);

time = 0;
message = "Вы приехали. Добро пожаловать в Москву";
console.log(message);
// 2 вариант:
console.log(`${message}`);

// 8 задание
const fahrenheit = 451;
const celsius = (fahrenheit - 32) / 1.8;
console.log(
  fahrenheit + " градуса по Фаренгейту — это " + celsius + " градуса по Цельсию"
);
// 2 вариант:
console.log(
  `${fahrenheit} градуса по Фаренгейту — это ${celsius} градуса по Цельсию`
);
