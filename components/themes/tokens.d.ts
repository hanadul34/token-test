declare const root: RootObject
export default root
export interface RootObject {
  test: Test;
  animation: Animation;
  typography: Typography;
  sizes: Sizes;
  base: Base;
}
export interface Base {
  type: string;
  description: string;
  palette: Palette;
  backgrounds: Backgrounds2;
}
export interface Backgrounds2 {
  'green-primary': string;
  'red-primary': string;
  'light-primary': string;
  'dark-primary': string;
}
export interface Palette {
  primary150: string;
  primary30: string;
  primary50: string;
  primary70: string;
  primary90: string;
  primary120: string;
  primary140: string;
}
export interface Sizes {
  type: string;
  digital: Digital;
  'base-spacing': string;
}
export interface Digital {
  devices: Devices;
  web: string;
}
export interface Devices {
  tablet: string;
  mobile: string;
}
export interface Typography {
  'primary-font': string;
  'font-weight-default': number;
}
export interface Animation {
  description: string;
  basics: Basics;
}
export interface Basics {
  small: number[];
  'Duration-100': string;
}
export interface Test {
  backgrounds: Backgrounds;
}
export interface Backgrounds {
  primary: string;
}