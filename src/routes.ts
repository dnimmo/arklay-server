import getItem from './items';
import getRoom from './rooms';


const version = 
  '1.0';


const routes = 
  function (app : { route: any }) {
      // todo: Fix that `any` declaration!
      app
          .route(`/v${version}/items/:itemKey`)
          .get(getItem);
  
      
      app
          .route(`/v${version}/rooms/:roomKey`)
          .get(getRoom);
  };


export default routes;