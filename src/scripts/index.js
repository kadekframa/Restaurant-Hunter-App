import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css'
import data from '../DATA.json';

/* get data JSON */
let html = "";
data.restaurants.forEach((resto) => {
    html += `
        <article class="post-item">
            <img tabindex="0" class="post-item-thumbnail" src="${resto.pictureId}"
                alt="Gambar suasana restoran yang berada di ${resto.name}" title="Gambar Suasana restoran ${resto.name}"/>
            <div class="city">
            <span>${resto.city}</span>
            </div>
            <div class="post-item-content">
            <p class="post-item-rate">
                Rating: <b tabindex="-1" class="post-item-rate-number">${resto.rating}</b>
            </p>
            <h1 class="post-item-title"><a href="#">${resto.name}</a></h1>
            <p class="post-item-description">${resto.description}</p>
            </div>
        </article>
    `;

    document.getElementById('posts-restaurant').innerHTML = html;
});


/* navigation drawer */
const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');
const main = document.querySelector('main');
const hero = document.querySelector('.hero');
const anchor = document.querySelector('.nav-item-anchor');


menu.addEventListener('click', function(event){
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener("click", function(){
    drawer.classList.remove('open');
});

main.addEventListener('click', function(){
    drawer.classList.remove('open');
});

anchor.addEventListener('focus', () => {
    drawer.classList.toggle('open');
});