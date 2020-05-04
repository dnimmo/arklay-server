import { ItemKey, Item } from './shared_interfaces';


export
const itemCanBeUsed =
  (params : {
     item : ItemKey, 
     availableDirections: Array<{ itemsThatCanBeUsed: Array<ItemKey> }> 
    }
  ) : boolean => 
      params
          .availableDirections
          .some(
              ({ itemsThatCanBeUsed }) => 
                  itemsThatCanBeUsed 
                      ? itemsThatCanBeUsed.includes(params.item)
                      : false
          );


export
const itemHasBeenPickedUp =
  (params : { 
    item: ItemKey, 
    inventory : 
      { itemsHeld : Array<ItemKey>
        , itemsUsed : Array<ItemKey> 
      }
  }) : boolean => 
      params.inventory.itemsHeld.includes(params.item)
        || params.inventory.itemsUsed.includes(params.item);


export
const itemHasBeenUsed =
  (params : { 
    item: ItemKey, 
    inventory : 
      { itemsHeld : Array<ItemKey>
        , itemsUsed : Array<ItemKey> 
      }
  }) : boolean => 
      params.inventory
          .itemsUsed
          .includes(params.item);


export
const items = 
  { LION_CREST: { 
      name: 'Lion Crest',
      description: 'A crest, with a lion\'s head on the front.',
      messageWhenUsed: 'You place the crest into the door',
      messageWhenNotUsed: 'Cool lion, but what could this be for?',
      soundWhenUsed: 'insert_crest',
      key: 'LION_CREST'
  },
  WINE_BOTTLE: {
      name : 'Wine Bottle',
      description : 'An expensive-looking bottle of wine.',
      messageWhenUsed : 'You place the wine bottle back in the rack',
      messageWhenNotUsed : 'It\'s a shame this is empty. Some wine would be good right now.',
      soundWhenUsed: 'bottle_noise',
      key: 'WINE_BOTTLE'
  },
  UTILITY_KEY: { 
      name : 'Utility Key',
      description : 'A small key, with a tag that reads "Utility".',
      messageWhenUsed : 'You unlock the door to the utility room',
      messageWhenNotUsed : 'This key doesn\'t seem to fit any locks here.',
      soundWhenUsed: 'metal_on_metal',
      key: 'UTILITY_KEY'
  },
  SHEET_MUSIC: {
      name : 'Sheet Music',
      description : 'Sheet music for Beethoven\'s Piano Sonata No. 14.',
      messageWhenUsed : 'You play the piano',
      messageWhenNotUsed : 'An excellent piece of music. Though I\'m not sure why I decided to steal it',
      soundWhenUsed: 'paper_noise',
      key: 'SHEET_MUSIC'
  },
  MOOSE_HEAD: { 
      name : 'Moose Head',
      description : 'A moose\'s head. Its cold, dead eyes stare at you, looking lost and lonely.',
      messageWhenUsed : 'Ah, that\'s better',
      messageWhenNotUsed : 'I will not rest until this is back where it belongs',
      soundWhenUsed: 'heavy_object',
      key: 'MOOSE_HEAD'
  },
  KEY_CODE: {
      name : 'Keycode',
      description : 'A piece of paper with "2407" written on it.',
      messageWhenUsed : 'You enter the keycode into the terminal',
      messageWhenNotUsed : 'What could these numbers mean?',
      soundWhenUsed: 'keyboard',
      key: 'KEY_CODE'
  },
  EAGLE_CREST: {
      name : 'Eagle Crest',
      description : 'A crest, with an eagle\'s head on the front.',
      messageWhenUsed : 'You place the crest into the door',
      messageWhenNotUsed : 'What is this for? What does the eagle signify?',
      soundWhenUsed: 'insert_crest',
      key: 'EAGLE_CREST'
  },
  CROWBAR :
  {   name : 'Crowbar',
      description : 'A sturdy crowbar.',
      messageWhenUsed : 'You prise off the wooden planks',
      messageWhenNotUsed : 'Nothing to use this on in here.',
      soundWhenUsed: 'wood_crate_open',
      key: 'CROWBAR'
  },
  STATUE_HEAD :
  {   name : 'Statue Head',
      description : 'The head of a small statue.',
      messageWhenUsed : 'You place the head carefully back onto the statue',
      messageWhenNotUsed : 'What a strange thing to have found. I wonder who it\'s meant to be?',
      soundWhenUsed: 'heavy_object',
      key: 'STATUE_HEAD'
  },
  HANDLE :  
  {   name : 'Handle',
      description : 'A metal handle. It looks like it\'s for some sort of trap door.',
      messageWhenUsed : 'You have attached the handle',
      messageWhenNotUsed : 'I\'m not sure where I could put this.',
      soundWhenUsed: 'door_unlock',
      key: 'HANDLE'
  },
  SMALL_KEY: 
  {   name : 'Small Key',
      description : 'A small key, with a tag that reads "S.Q."',
      messageWhenUsed : 'You unlock the door',
      messageWhenNotUsed : 'It doesn\'t look like this can be used here',
      soundWhenUsed: 'metal_on_metal',
      key: 'SMALL_KEY'
  },
  WOLF_CREST :
  {   name : 'Wolf Crest',
      description : 'A crest with a wolf on it. Very unusual.',
      messageWhenUsed : 'You place the crest into the door',
      messageWhenNotUsed : 'What could this be for?',
      soundWhenUsed: 'insert_crest',
      key: 'WOLF_CREST'
  }
  };


const getItem = 
  (itemKey : ItemKey) : Item => 
      items[itemKey];


export default getItem; 