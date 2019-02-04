function getRandomQuote(arr) {
  // Generates a random number between 0 and the size of the array
  // Returns the array object at the index of the random number
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

function getRandomColor() {
  // Generates a random number between 0 and 255
  // Grabs body selector and updates background color
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  document.getElementById("body").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function printQuote() {
  // Call the getRandomQuote() function and assign returned value to a variable
  // Begin building our HTML string
  // Check that object has 'citation' and 'year' values
  // Complete HTML string
  // Set 'innerHTML' of 'quote-box' div to HTML string
  // Refreshes background color each turn with getRandomColor() function
  let randomQuote = getRandomQuote(quotes);
  let message = "<p class = 'quote'>" + randomQuote.quote + "</p>";
  message += "<p class = 'source'>" + randomQuote.source;
  if (randomQuote.citation) {
    message += "<span class = 'citation'>" + randomQuote.citation + "</span>";
  };
  if (randomQuote.year) {
    message += "<span class = 'year'>" + randomQuote.year + "</span>";
  }
  message += "</p>";
  if (randomQuote.tags) {
    message += "<p class = 'tags'> Taught through " + randomQuote.tags + "</p>";
  }
  let quoteDiv = document.getElementById("quote-box");
  quoteDiv.innerHTML = message;
  getRandomColor();
}

let quotes = [
  {
    quote: "Be ashamed to die until you have won some victory for humanity.",
    source: "Horace Mann",
    year: 1859,
    citation: "Address at Antioch College",
    tags: "inspiration"
  },
  {
    quote: "Science without religion is lame, religion without science is blind.",
    source: "Albert Einstein",
    year: 1954,
    citation: "Letter to Eric Gutkind",
    tags: "reflection"
  },
  {
    quote: "But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
    source: "Albus Dumbledore",
    year: 1999,
    citation: "Harry Potter and the Prisoner of Azkaban",
    tags: "reflection"
  },
  {
    quote: "Have the courage to follow your heart and intuition. They somehow know what you truly want to become.",
    source: "Steve Jobs",
    year: 2005,
    citation: "Stanford Commencement Speech",
    tags: "inspiration"
  },
  {
    quote: "What is better: to be born good, or overcome your evil nature through great effort?",
    source: "Paarthurnax",
    year: 2011,
    citation: "The Elder Scrolls",
    tags: "caution"
  }
];

// Refreshes quote every 4 seconds
setInterval(printQuote, 4000);
