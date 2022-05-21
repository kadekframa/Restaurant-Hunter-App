import TheRestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate, createSkeletonRestaurantTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
        <div class="content">
            <h2 class="content__heading">Restaurants List</h2>
            <div id="restaurants" class="restaurants">
                ${createSkeletonRestaurantTemplate(20)}
            </div>
        </div>
        `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render().
        const restaurants = await TheRestaurantDbSource.listRestaurants();
        const restaurantsContainer = document.querySelector('#restaurants');
        restaurantsContainer.innerHTML = '';
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Home;
