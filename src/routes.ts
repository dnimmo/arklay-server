import getItem from './items';
import getRoom from './rooms';
import { Item, Room } from './shared_interfaces';

const version = 
  '1.0';


const respond =
  (value : Room | Item | undefined, res : any) => 
      res
          .status(value ? 200 : 404)
          .json({ value });


const routes = 
  function (app : { route: any }) {
      // todo: Fix these `any` declarations!
      app
          .route(`/v${version}/items/:itemKey`)
          .get(
              (req : any, res : any) => {
                  const item = 
                    getItem(req.params.itemKey.toUpperCase());

            
                  respond(item, res);
              });
  
      
      app
          .route(`/v${version}/rooms/:roomKey`)
          .get(
              (req : any, res : any) => {
                  const room = 
                    getRoom(req.params.roomKey.toUpperCase());


                  respond(room, res);
              });
  };


export default routes;