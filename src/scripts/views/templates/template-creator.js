import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant__name">${restaurant.name}</h2>
    <img class="restaurant__picture" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" />
    <div class="restaurant__info">
        <h3>Information</h3>
        <h4>City</h4>
        <p>${restaurant.city}</p>
        <h4>Rating</h4>
        <p>${restaurant.rating}</p>
        <h4>Adress</h4>
        <p>${restaurant.address}</p>
        <h4>Food Menu:</h4>
        <p>${restaurant.menus.foods.map((food) => food.name)}</p>
        <h4>Drink Menu:</h4>
        <p>${restaurant.menus.drinks.map((drink) => drink.name)}</p>
    </div>
    <div class="restaurant__description">
        <h4>Description</h3>
        <p>${restaurant.description}</p>
    </div>
    <div class="restaurant__reviews">
        <h4>Customer Reviews</h3>
        ${restaurant.customerReviews.map((review) => `
            <div class="grid-review">
                <div class="reviews">
                    <p class="review-name" tabindex="0">${review.name}</p>
                    <p class="review-content" tabindex="0">${review.review}</p>
                    <p class="review-date" tabindex="0"><i>${review.date}</i></p>
                </div>
            </div>
        `).join('')}
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster" alt="${restaurant.name}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantDetailTemplate,
    createRestaurantItemTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};
