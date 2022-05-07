import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';

let html = "";
data.restaurants.forEach((resto) => {
    html += `
        <article class="post-item">
            <img class="post-item__thumbnail" src="${resto.pictureId}"
                alt="Gambar suasana restoran yang berada di ${resto.city}"/>
            <div class="city">
            <span>${resto.city}</span>
            </div>
            <div class="post-item__content">
            <p class="post-item__date">
                Rating <a href="#" class="post-item__date__author">${resto.rating}</a>
            </p>
            <h1 class="post-item__title"><a href="#">${resto.name}</a></h1>
            <p class="post-item__description">${resto.description}</p>
            </div>
        </article>
    `;

    document.getElementById('content-resto').innerHTML = html;
});