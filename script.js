// let apiQuotes = [];

const quoteContainer = document.getElementById('quote-container')
const qouteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

// Show loading
function loading() {
    loader.hidden = false; 
    quoteContainer.hidden = true;
}

// Hide Loading 
function complete() {
    loader.hidden = true; 
    quoteContainer.hidden = false;
}

// Show new Quote 
function newQuote() {
    loading();

    // Pick a random Quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    
    // Check if Author
    if (!quote.author) {
        authorText.textContent = '無名氏'

    } else { 
        authorText.textContent = quote.author; 
    }

    // Check Quote length to determine styling
    if (quote.text.length > 50) {
        qouteText.classList.add('long-quote'); 

    } else {
        qouteText.classList.remove('long-quote'); 
    }

    // Set Quote, Hide Loader
    qouteText.textContent = quote.text;
    complete();
}

// Get Quotes from API 
// async function getQuotes() {
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
//     try {
//         const response = await fetch(apiUrl); 
//         apiQuotes = await response.json(); 
//         newQuote(); 
//     } catch (error) {
//         // catch Error Here
//     }
// }

// Tweet Quote 
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${qouteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote); 
twitterBtn.addEventListener('click', tweetQuote);

// On Load
// getQuotes(); 

newQuote();
