 var quotes = [{
         qoute: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
         Author: `― Albert Einstein`,
         imag: `"image/eintitain.jpg"`
     },
     {
         qoute: `“So many books, so little time.”`,
         Author: `― Frank Zappa`,
         imag: `"image/frank.jpg"`
     },
     {
         qoute: `“A room without books is like a body without a soul.”`,
         Author: `― Marcus Tullius Cicero`,
         imag: `"image/maracos.jpg"`
     },
     {
         qoute: `“
             You only live once,
             but
             if you do it right,
             once is enough.”
             `,
         Author: `―
             Mae West `,
         imag: `"image/mae.jpg"`
     },
     {
         qoute: `“  If you tell the truth,you don 't have to remember anything.”`,
         Author: `― Mark Twain`,
         imag: `"image/mark.jpg"`
     },
     {
         qoute: `“A friend is someone who knows all about you and still loves you.”`,
         Author: `― Elbert Hubbard`,
         imag: `"image/Elbert Hubbard.jpg"`
     },
     {
         qoute: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
         Author: `-Dr. Seuss`,
         imag: `"image/dr.saw.jpg"`
     },
     {
         qoute: `“Without music, life would be a mistake.”`,
         Author: `― Friedrich Nietzsche, Twilight of the Idols`,
         imag: `"image/Friedrich Nietzsche.jpg"`
     },
     {
         qoute: `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
         Author: `― Ralph Waldo Emerson`,
         imag: `"image/Ralph Waldo Emerson.jpg"`
     }
 ]
 var Author = document.getElementById("quoteAutor")
 var quoteBody = document.getElementById("quote")
 var image = document.getElementById("image")
 var previousRandomNumber = -1

 function GnerateQute() {
     var randomNumber;

     do {
         randomNumber = Math.floor(Math.random() * quotes.length);
     }
     while (randomNumber === previousRandomNumber);

     previousRandomNumber = randomNumber;
     Author.innerHTML = quotes[randomNumber].Author;
     quoteBody.innerHTML = quotes[randomNumber].qoute;
     image.innerHTML = `<img src= ${quotes[randomNumber].imag} class="rounded-circle" id="images">`;

 }