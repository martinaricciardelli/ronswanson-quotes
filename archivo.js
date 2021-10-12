const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quote = document.querySelector("#quote");
const button = document.querySelector("#btn");
let currentQuote = '';
//const tweet = document.querySelector("#tweet");


  
function generateQuote(data) {
    fetch(url)
        .then(resp => resp.json())
        .then(function (data) {
            quote.innerHTML = `"${data[0]}"`;
            currentQuote = `"${data[0]}"`;
        console.log(data);
        })
        .catch(function (error) {
            console.log(error)
        })
}

generateQuote();
button.onclick = generateQuote;
