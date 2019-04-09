export type IColor = 'blue'
  | 'green'
  | 'yellow'
  | 'red'
  | 'lightBlue'
  | 'lightGreen'
  | 'lightYellow'
  | 'lightRed'
  | 'darkBlue'
  | 'darkGreen'
  | 'darkYellow'
  | 'darkRed';
export type IColors = ReadonlyArray<IColor>;
export const colors: IColors = [
  'blue',
  'green',
  'yellow',
  'red',
  'lightBlue',
  'lightGreen',
  'lightYellow',
  'lightRed',
  'darkBlue',
  'darkGreen',
  'darkYellow',
  'darkRed',
];
export const blueColors: IColors = [
  'lightBlue',
  'blue',
  'darkBlue',
];
export const redColors: IColors = [
  'lightRed',
  'red',
  'darkRed',
];
export const yellowColors: IColors = [
  'lightYellow',
  'yellow',
  'darkYellow',
];
export const greenColors: IColors = [
  'lightGreen',
  'green',
  'darkGreen',
];

export const blueBd: ReadonlyArray<string> = [
  '#7DC0FF',
  '#1677D2',
  '#055097',
];
export const redBd: ReadonlyArray<string> = [
  '#FF9B9B',
  '#F55B51',
  '#BC0B00',
];
export const yellowBd: ReadonlyArray<string> = [
  '#FEA26E',
  '#F19F00',
  '#D66700',
];
