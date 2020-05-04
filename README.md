# arklay-server

There are four handlers exported in `index`: 

## allItemsHandler
Takes no parameters, returns all items.

## allRoomsHandler
Takes no parameters, returns all rooms.

## individualItemHandler
Takes an `ItemKey` (defined in `src/shared_interfaces.ts`) and returns a single item.

## individualRoomHandler 
Takes a `RoomKey` (defined in `src/shared_interfaces.ts`) and returns a single room.
