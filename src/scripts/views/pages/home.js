import TheRestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
        <div class="content">
            <h2 class="content__heading">Restaurants List</h2>
            <div id="restaurants" class="restaurants">

            </div>
        </div>
        `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render().
        const restaurants = await TheRestaurantDbSource.listRestaurants();
        const restaurantsContainer = document.querySelector('#restaurants');
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Home;
