import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const food = JSON.parse(message.data);

    NotificationHelper.sendNotification({
      title: `${food.name} is yummy`,
      options: {
        body: food.description,
        image: `${CONFIG.BASE_IMAGE_URL_SMALL + food.id}`,
      },
    });
  },
};

export default WebSocketInitiator;
