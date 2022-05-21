import LikeButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';
 
const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};
 
export { createLikeButtonPresenterWithRestaurant };