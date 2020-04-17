export 
type ItemKey = 
    'LION_CREST'
    | 'WINE_BOTTLE'
    | 'UTILITY_KEY'
    | 'SHEET_MUSIC'
    | 'MOOSE_HEAD'
    | 'KEY_CODE'
    | 'EAGLE_CREST'
    | 'CROWBAR'
    | 'STATUE_HEAD'
    | 'HANDLE'
    | 'SMALL_KEY'
    | 'WOLF_CREST'


export
type Item = {
  name : string,
  description: string,
  messageWhenUsed : string,
  messageWhenNotUsed : string,
  soundWhenUsed: string,
}


export
enum DirectionDisplayText {
  Enter = 'Enter',
  North = 'North',
  East = 'East',
  West = 'West',
  South = 'South',
  Upstairs = 'Upstairs',
  Downstairs = 'Downstairs',
  End = 'End',
}


export 
interface Direction  { 
  text: DirectionDisplayText, 
  room: string, 
  itemsThatCanBeUsed: string[] | never[]
}


export      
type RoomKey = 
  'START' 
  | 'ENTRANCE'
  | 'UPSTAIRS_FOYER'
  | 'UPSTAIRS_HALLWAY_ONE'
  | 'UPSTAIRS_STUDY'
  | 'UPSTAIRS_SECRET_ROOM_THREE'
  | 'UPSTAIRS_STAIRWAY_THREE'
  | 'UPSTAIRS_MASTER_BEDROOM'
  | 'UPSTAIRS_MASTER_EN_SUITE'
  | 'UPSTAIRS_STAIRWAY_TWO'
  | 'UPSTAIRS_HALLWAY_TWO'
  | 'UPSTAIRS_ART_GALLERY'
  | 'UPSTAIRS_HALLWAY_THREE'
  | 'UPSTAIRS_AQUARIUM'
  | 'UPSTAIRS_LIBRARY'
  | 'UPSTAIRS_HALLWAY_FOUR'
  | 'UPSTAIRS_SECOND_BEDROOM'
  | 'UPSTAIRS_SECOND_BATHROOM'
  | 'UPSTAIRS_THIRD_BEDROOM'
  | 'UPSTAIRS_TROPHY_ROOM'
  | 'DINING_HALL'
  | 'HALLWAY_ONE'
  | 'HALLWAY_TWO'
  | 'UTILITY_ROOM'
  | 'KITCHEN'
  | 'FREEZER'
  | 'WASTE_DISPOSAL'
  | 'HALLWAY_FOUR'
  | 'STAIRWAY_THREE'
  | 'MUSIC_ROOM'
  | 'HALLWAY_FIVE'
  | 'GYM'
  | 'SWIMMING_POOL'
  | 'SHOWERS'
  | 'SECRET_ROOM_ONE'
  | 'STATUE_ROOM'
  | 'SECRET_ROOM_TWO'
  | 'HALLWAY_THREE'
  | 'GARAGE'
  | 'SERVANTS_QUARTERS'
  | 'SERVANTS_BATHROOM'
  | 'STAIRWAY_TWO'
  | 'BASEMENT_STAIRWAY'
  | 'BASEMENT_STORAGE'
  | 'BASEMENT_STORAGE_TWO'
  | 'BASEMENT_ITEM_ROOM'
  | 'BASEMENT_WASTE_DISPOSAL'
  | 'BASEMENT_WINE_CELLAR'
  | 'BASEMENT_LAB_ENTRANCE'
  | 'END'


export
type Room = 
  { name: string,
    intro: string,
    surroundings: string,
    surroundingsWhenItemPickedUp: string | null,
    surroundingsWhenItemUsed: string | null,
    item: string | null,
    availableDirections: Direction[],
    descriptionWhenExamined: string,
    unlockRequirements: string[] | null,
    messageOnUnsuccessfulEntryAttempt: string | null
}
