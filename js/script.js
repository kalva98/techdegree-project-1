/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
  Create an array of quote objects named `quotes`.
  Must have five quotes in the array.
  Must have following properties: quote, source, citation, year.
  Tags propertie for extra credit.
***/

let quotes = [
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney'
  },
  {
    quote: 'Who runs the world? Girls!',
    source: 'Beyonce',
    citation: 'Beyonce Album',
    year: '2011, ',
    tags: 'music'
  },
  {
    quote: 'Those who dare to fail miserably can achieve greatly.',
    source: 'John F. Kennedy',
    citation: 'speech',
    year: 1961
  },
  {
    quote: 'Wisdom is better than silver and gold.',
    source: 'Lauryn Hill',
    citation: 'Lost Ones',
    year: '1998, ', 
    tags: 'music'
  },
  {
    quote: 'Always pass on what you have learned.',
    source: 'Yoda',
    citation: 'Star Wars',
    year: '1983, ',
    tags: 'movie'
  }
];

/***
  Create a `getRandomQuote` function.
  Must have a variable to store a random number between zero and the length of quote.
  Return a random quote.
***/

function getRandomQuote() 
{
  let num = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[num];
  return randomQuote;
}

/***
  Create the `printQuote` function. 
  Must have a variable set equal to getRandomQuote.
  Must have a variable set equal to empty string, ''.
  Use random quote variable and example of HTML template to concatenate to an empty string variable.
  String must have opening p tag with class equal to quotes.
  Quote property of the quote object in the random quote variable, a closing p tag.
  String must have opening p tag with class equal to source.
  Source property of the quote object in the random quote variable, no closing p tag.
  Use if statements to see if the quote object has citation and year properties.
  Must have one opening span tag with a class equal to "citation."
  Citaion property of the quote object in the random quote variable, closing span tag.
  Must have one opening span tag with a class equal to "year."
  Year property of the quote object in the random quote variable, closing span tag.
  For extra credit, add one opening span tag with a class equal to "tag"
  Tag property of the quote object in the random quote variable, closing span tag.
  COncatenate closing p tag to HTML string.

***/

function printQuote(quote) 
{
  let message = getRandomQuote(quotes);
  let template = ' ';

  template = "<p class='quote'>" + message.quote + "</p>";
  template += "<p class='source'>" + message.source;

  if (message.citation)
  { template += "<span class='citation'>" + message.citation + "</span>" ;}

  if (message.year) 
  { template += "<span class='year'>" + message.year + "</span>" ;}

  if (message.tags) 
  { template += "<span class='tags'>" + message.tags + "</span>"; }
  
  template += "</p>"

  document.getElementById("quote-box").innerHTML = template;
  const colorResult = getRandomColor();
  document.body.style.background = colorResult;

}
/***
  Change background color for extra credit.
***/
 
let colorList = ["purple", "pink", "grey", "blue", "orange"];

function getRandomColor()
{
  let n = Math.floor(Math.random() * colorList.length);
  return colorList [n];
}
 

printQuote(quotes);

setInterval (printQuote, 20000);

//Do not touch line of code below this comment.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

