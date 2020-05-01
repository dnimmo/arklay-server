import getRoom from './rooms';
import getItem from './items';
import { RoomKey, ItemKey } from './shared_interfaces';


exports.itemsHandler = 
  async (event : { pathParameters : { itemkey : ItemKey } }) => {
      const item = 
        getItem(event.pathParameters.itemkey);


      const response = {
          headers: { 
              'Access-Control-Allow-Origin' : '*'
          },
          statusCode: item ? 200 : 404,
          body: JSON.stringify(item),
      };


      return response;
  };


exports.roomsHandler = 
  async (event : { pathParameters : { roomkey : RoomKey } }) => {
      const room = 
        getRoom(event.pathParameters.roomkey);


      const response = {
          headers: { 
              'Access-Control-Allow-Origin' : '*'
          },
          statusCode: room ? 200 : 404,
          body: JSON.stringify(room),
      };


      return response;
  };
