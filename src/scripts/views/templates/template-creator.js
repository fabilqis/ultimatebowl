/* eslint-disable no-shadow */
import CONFIG from '../../globals/config';

const createFoodDetailTemplate = (food) => `
  <h2 class="food__name">${food.name}</h2>
  <img class="food__image" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + food.pictureId}" alt="${food.image}" />
  <div class="food__info">
    <h3>Information</h3>
     <div class="city-label">
                  <span class="city-label-text">
                      Kota ${food.city}
                  </span>
    </div>
    <h4>Rating</h4>
    <p>${food.rating}</p>
  </div>
  <div class="food__description">
    <h3>Category</h3>
    <span>${food.categories.map((category) => category.name).join(' | ')}</span>
    <h3>Other Menu</h3>
    <h4>Foods</h4>
    <p>${food.menus.foods.map((food) => food.name).join(' | ')}</p>
    <h4>Drinks</h4>
    <p>${food.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
    <h3>Description</h3>
    <p>${food.description}</p>
  </div>
`;

const createRestoReviewTemplate = (reviews) => `
  <div class="review">
    <p>
    <span class="name">${reviews.name}</span> &bull; <span class="date">${reviews.date}</span>
    </p>
    <p>${reviews.review}</p>
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFoodItemTemplate = (food) => `
  <div class="food-item">
    <div class="food-item__header">
<img class="food-item__header__poster" alt="${food.name}"
   src="${food.pictureId ? CONFIG.BASE_IMAGE_URL_MEDIUM + food.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
   <div class="food-item__header__rating"> 
        <p>⭐️<span class="food-item__header__rating__score">${food.rating}</span></p>
      </div>
    </div>
    <div class="food-item__content">
      <h3><a href="/#/detail/${food.id}">${food.name}</a></h3>
      <b><h4>${food.city}</h4></b>
      <p>${food.description}</p>
    </div>
  </div>
`;

export {
  createFoodItemTemplate,
  createFoodDetailTemplate,
  createRestoReviewTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
