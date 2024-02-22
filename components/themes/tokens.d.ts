declare const root: RootObject
export default root
export interface RootObject {
  animation: Animation;
  base: Base;
  sizes: Sizes;
  typography: Typography;
}
export interface Typography {
  'font-weight-default': number;
  'primary font': string;
}
export interface Sizes {
  type: string;
  'base spacing': string;
  digital: Digital;
}
export interface Digital {
  devices: Devices;
  web: string;
}
export interface Devices {
  mobile: string;
  tablet: string;
}
export interface Base {
  comment: string;
  type: string;
  backgrounds: Backgrounds;
  palette: Palette;
}
export interface Palette {
  primary30: string;
  primary50: string;
  primary70: string;
  primary90: string;
}
export interface Backgrounds {
  'dark-primary': string;
  'light-primary': string;
}
export interface Animation {
  comment: string;
  basics: Basics;
}
export interface Basics {
  'Duration-100': string;
  small: number[];
}