import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Movie</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
        <div id="favorite-empty" class="favorite-empty">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    const favoriteEmpty = document.querySelector('#favorite-empty');
    if (restaurants.length === 0) {
        favoriteEmpty.innerHTML = `
            <div class="favorite-not-found">
                <p>--- Restoran favorit anda tidak ditemukan, silahkan di like dulu yaa! ---</p>
                <a class="back-to-home" href="#/home">Kembali ke menu Home</a>
            </div>
        `;
    }
    restaurants.forEach((restaurant, index) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant, index);
    });
  },
};

export default Like;
