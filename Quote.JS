`use strict`;
let quote = document.querySelector(`#quote`);
let newQuote = document.querySelector(`#new-quote`);
let copyQuote = document.querySelector(`#copy-quote`);

// fetch(`https://api.kanye.rest/`)
// .then(res => res.json())
// .then( data => {
//     document.getElementById(`quote`)
// })

// .catch((err)=>{
//     document.getElementById(`#quote`).innerHTML= `Data not found`;
// });

// }

async function fetchQuote() {
  let res = await fetch(`https://dummyjson.com/quotes/random`);
  let data = await res.json();

  quote.innerHTML = data.quote;
  localStorage.setItem(`quote`, JSON.stringify(data.quote));
}
newQuote.addEventListener(`click`, () => {
  fetchQuote();
});
newQuote.addEventListener(`keypress`, function (e) {
  if (e.key === `Enter`) {
    fetchQuote();
  }
});
copyQuote
  .addEventListener("click", () => {
    let quote = localStorage.getItem(`quote`);
    alert(`copied`);
    navigator.clipboard.writeText(quote);
  })

  .catch(() => {
    document.querySelector(`#quote`).innerHTML = "Opps Data not found";
  });
