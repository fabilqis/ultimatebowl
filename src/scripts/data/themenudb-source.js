import API_ENDPOINT from '../globals/api-endpoints';

class TheMenuDbSource {
  static async menuFood() {
    const response = await fetch(API_ENDPOINT.MENU);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailFood(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default TheMenuDbSource;
