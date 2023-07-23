let quotes = [
  "Życie jest piękne, wystarczy tylko je dobrze zrozumieć. - Albert Einstein",
  "Nie sukces jest kluczem do szczęścia. Szczęście jest kluczem do sukcesu. Jeśli kochasz to, co robisz, osiągniesz sukces. - Albert Schweitzer",
  "Czasem jedna zmiana może wprowadzić wszystkie różnice. - C.S. Lewis",
  "Pomyśl o tym, co masz, zanim pomyślisz o tym, czego brakuje. - Ernest Hemingway",
  "Chwile przyjemności są jak promienie słoneczne, które przemijają szybko, ale pozostawiają piękne wspomnienia. - Dalai Lama",
  "Nigdy nie jest za późno, aby stać się tym, kim chciałbyś być. - George Eliot",
  "Nawet papier toaletowy wie, że ma sie rozwijac - Łukasz Pedo",
];
let btn = document.querySelector("#btn");
let quote = document.querySelector(".quote");

btn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  randomQuotes = quotes[randomNumber];
  console.log(randomQuotes);
  quote.innerHTML = randomQuotes;
});
