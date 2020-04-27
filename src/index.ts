import getRoom from './rooms';
import getItem from './items';
import { RoomKey, ItemKey } from './shared_interfaces';


exports.itemsHandler = 
  async (event : { itemKey : ItemKey }) => {
      const item = 
        getItem(event.itemKey);


      const response = {
          statusCode: item ? 200 : 404,
          body: JSON.stringify(item),
      };


      return response;
  };


exports.roomsHandler = 
  async (event : { roomKey : RoomKey }) => {
      const room = 
        getRoom(event.roomKey);


      const response = {
          statusCode: room ? 200 : 404,
          body: JSON.stringify(room),
      };


      return response;
  };
