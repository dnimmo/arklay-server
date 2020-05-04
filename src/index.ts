import getRoom, { rooms } from './rooms';
import getItem, { items } from './items';
import { RoomKey, ItemKey } from './shared_interfaces';


const responseObject = 
  (body : object) => ({
      headers: { 
          'Access-Control-Allow-Origin' : '*'
      },
      statusCode: body ? 200 : 404,
      body: JSON.stringify(body),
  });


exports.allItemsHandler = 
  async () => 
      responseObject(items);


exports.individualItemHandler = 
  async (event : { pathParameters : { itemkey : ItemKey } }) => {
      const item = 
        getItem(event.pathParameters.itemkey);

      return responseObject(item);
  };


exports.allRoomsHandler = 
  async () =>
      responseObject(rooms); 


exports.individualRoomHandler = 
  async (event : { pathParameters : { roomkey : RoomKey } }) => {
      const room = 
        getRoom(event.pathParameters.roomkey);


      return responseObject(room);
  };
