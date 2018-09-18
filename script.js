$(document).ready(function() {
var quote;
var author;
newQuote();
function newQuote(){
   $.getJSON('https://talaikis.com/api/quotes/random/', function(data) {
     quote = data.quote;
     author = data.author;
     $('#quote, #author').fadeOut(500, function() {
       $('#quote').html(quote).fadeIn(1000);
       $('#author').html('--   ' + author).fadeIn(1000);
     }); 
   });
 }
 $('.new-quote').on('click', newQuote);
 $('.tweetQuote').on('click', function() {
     var tQuote = $('#quote').text();
     var tAuthor =  $('#author').text();
     window.open('https://twitter.com/home/?status=' + tQuote + '    ' + tAuthor );
         });
});    









