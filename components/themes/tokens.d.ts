declare const root: RootObject
export default root
export interface RootObject {
  base: Base;
  sizes: Sizes;
  typography: Typography;
  animation: Animation;
}
export interface Animation {
  '$description': string;
  basics: Basics;
}
export interface Basics {
  small: Small;
  'Duration-100': Duration100;
}
export interface Duration100 {
  '$value': string;
  '$description': string;
  '$type': string;
}
export interface Small {
  '$type': string;
  '$description': string;
  '$value': number[];
}
export interface Typography {
  'primary font': Primary30;
  'font-weight-default': Fontweightdefault;
}
export interface Fontweightdefault {
  '$value': number;
  '$type': string;
}
export interface Sizes {
  '$type': string;
  'base spacing': BaseSpacing;
  digital: Digital;
}
export interface Digital {
  web: BaseSpacing;
  devices: Devices;
}
export interface Devices {
  tablet: BaseSpacing;
  mobile: Mobile;
}
export interface Mobile {
  '$value': BaseSpacing;
}
export interface BaseSpacing {
  '$value': string;
}
export interface Base {
  '$description': string;
  '$type': string;
  palette: Palette;
  backgrounds: Backgrounds;
}
export interface Backgrounds {
  'light-primary': Lightprimary;
  'dark-primary': Lightprimary;
}
export interface Lightprimary {
  '$type': string;
  '$value': Primary30;
}
export interface Palette {
  primary30: Primary30;
  primary50: Primary30;
  primary70: Primary30;
  primary90: Primary30;
}
export interface Primary30 {
  '$type': string;
  '$value': string;
}