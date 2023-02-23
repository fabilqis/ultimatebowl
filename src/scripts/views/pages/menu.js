import TheMenuDbSource from '../../data/themenudb-source';
import { createFoodItemTemplate } from '../templates/template-creator';
import '../../component/resto-list';

const Menu = {
  async render() {
    return `
      <resto-list></resto-list>   `;
  },

  async afterRender() {
    const foods = await TheMenuDbSource.menuFood();
    const foodsContainer = document.querySelector('#resto-lists');
    foods.forEach((food) => {
      foodsContainer.innerHTML += createFoodItemTemplate(food);
    });
  },
};

export default Menu;
