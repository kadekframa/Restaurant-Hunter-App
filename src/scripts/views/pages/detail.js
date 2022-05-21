import TheRestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/favorite-button-presenter';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
            <div id="restaurant" class="restaurant"></div>
            <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        // Fungsi ini dijalankan seteleh render().
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
              id: restaurant.id,
              name: restaurant.name,
              pictureId: restaurant.pictureId,
              rating: restaurant.rating,
              description: restaurant.description,
            },
          });
    },
};

export default Detail;
