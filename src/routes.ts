import getItem from './items'
import getRoom from './rooms'
import { RoomKey, Room, ItemKey, Item } from './shared_interfaces'

const version = 
  '1.0'


const routes = 
  function (app : { route: any }) {
    app
      .route(`/v${version}/items/:itemKey`)
      .get(getItem)
  
      
    app
      .route(`/v${version}/rooms/:roomKey`)
      .get(getRoom)
  }


export default routes