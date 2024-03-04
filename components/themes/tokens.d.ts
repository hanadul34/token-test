declare const root: RootObject
export default root
export interface RootObject {
  base: Base;
}
export interface Base {
  background: Background;
}
export interface Background {
  blue: string;
  green: string;
  yellow: string;
}