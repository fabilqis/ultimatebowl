import UrlParser from '../../routes/url-parsers';
import TheMenuDbSource from '../../data/themenudb-source';
import { createFoodDetailTemplate, createRestoReviewTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-btn-initiator';
import FavoriteRestaurantDB from '../../data/favoriterestaurant-db';

import '../../component/resto-detail';
import '../../component/resto-review';

const Detail = {
  async render() {
    return `
      <resto-detail></resto-detail>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const food = await TheMenuDbSource.detailFood(url.id);
    const restaurantContainer = document.querySelector('#resto-detail');
    restaurantContainer.innerHTML = createFoodDetailTemplate(food);

    restaurantContainer.innerHTML += `
      <resto-review></resto-review>
    `;

    const restoReview = document.querySelector('#resto-review');
    food.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestoReviewTemplate(review);
    });

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantDB,
      restaurant: {
        id: food.id,
        name: food.name,
        city: food.city,
        description: food.description,
        pictureId: food.pictureId,
        rating: food.rating,
      },
    });
  },
};

export default Detail;
