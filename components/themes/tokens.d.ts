declare const root: RootObject
export default root
export interface RootObject {
  base: Base;
  sizes: Sizes;
  typography: Typography;
  animation: Animation;
}
export interface Animation {
  comment: string;
  basics: Basics;
}
export interface Basics {
  small: number[];
  'Duration-100': string;
}
export interface Typography {
  'primary font': string;
  'font-weight-default': number;
}
export interface Sizes {
  type: string;
  'base spacing': string;
  digital: Digital;
}
export interface Digital {
  web: string;
  devices: Devices;
}
export interface Devices {
  tablet: string;
  mobile: string;
}
export interface Base {
  comment: string;
  type: string;
  palette: Palette;
  backgrounds: Backgrounds;
}
export interface Backgrounds {
  'light-primary': string;
  'dark-primary': string;
}
export interface Palette {
  primary30: string;
  primary50: string;
  primary70: string;
  primary90: string;
}