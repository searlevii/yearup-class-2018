//This comes from data.js
let gifs = window.data.data;

function randomGif(){
  let meow = document.getElementById('CATS')
  let randomGIFs = Math.floor(Math.random()*gifs.length);
  meow.innerHTML = gifs[randomGIFs];
  meow.src=gifs[randomGIFs].images.original.url;
  console.log (gifs[randomGIFs]);
}

let button = document.querySelector('button');
button.addEventListener('click', randomGif);
