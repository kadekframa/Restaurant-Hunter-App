import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant__name">${restaurant.name}</h2>
    <img class="restaurant__picture lazyload" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" />
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

const createSkeletonRestaurantTemplate = (count) => {
    let template = '';
  
    for (let i = 0; i < count; i += 1) {
      template += `
        <div class="restaurant-item">
          <div class="restaurant-item__header">
              <img class="restaurant-item__header__poster lazyload" width="100%" height="350px" data-src="./images/placeholder.png" alt="skeleton">
          </div>
          <div class="restaurant-item__content">
              <h3 class="skeleton">Lorem ipsum dolor sit.</a></h3>
              <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
          </div>
        </div>
    `;
    }
    return template;
};

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
            data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
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

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantDetailTemplate,
    createSkeletonRestaurantTemplate,
    createRestaurantItemTemplate,
    createLikeRestaurantButtonTemplate,
    createUnlikeRestaurantButtonTemplate,
};
