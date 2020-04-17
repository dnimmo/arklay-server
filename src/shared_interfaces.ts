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