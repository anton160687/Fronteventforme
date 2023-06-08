import { Area, AreaReceived } from './areaType';

export type Place = {
  title: string;
  city: string;
  metro?: string;
  address: string;
  longitude: number;
  width: number;
  id_yandex?: string;
  start_time: Date;
  finish_time: Date;
  fireworks: boolean;
  children_kitchen: boolean;
  alco: boolean;
  payment_of_alco: number;
  lease_extension: boolean;
  lease_extension_price: number;
  average_check: number;
  description: string;
  parking: number;
  max_serving: number;
  type_place: number[];
  location: number[];
  kitchen: number[];
  event: number[];
  type_feature: number[];
  type_territory: number[];
  //areas?: Area[]
  place_img: string[];
  territory_desc: string;
  // под эти поля еще нет бэка или есть отдельные модели?
  welcome_desc?: string;
  outreg_price?: number;
  outreg_desc?: string;
  outreg_conditions?: string;
};

export type Album = {
  title: string;
  album_img: string[];
  preview_album_img?: string[];
};

//тип приходящего с бека Place
export type PlaceReceived = Omit<
  Place,
  | 'areas'
  | 'event'
  | 'finish_time'
  | 'start_time'
  | 'location'
  | 'type_feature'
  | 'type_place'
  | 'kitchen'
  | 'welcome_desc'
  | 'outreg_price'
  | 'outreg_desc'
  | 'outreg_conditions'
  | 'place_img'
  | 'territory_desc'
> & {
  areas: AreaReceived[];
  cover_place: string;
  event: Event[];
  start_time: string;
  finish_time: string;
  id: number;
  images_place: ImagesPlace[];
  location: Location[];
  kitchen: Kitchen[];
  outsites_reg: OutsideReg[];
  type_feature: Feature[];
  type_place: TypePlace[];
  welcome_zones: WelcomeZone[];
  images_wedding: ImagesWedding[];
  territory?: Territory[];
};

export type Event = {
  id: number;
  event: string;
};

export type ImagesPlace = {
  id: number;
  image: string;
  place: number;
};

export type Location = {
  id: number;
  location: string;
  //закомментировала для облегчения приведения типов в Preview
  // | 'sea'
  // | 'river'
  // | 'outc'
  // | 'inc'
  // | 'icc'
  // | 'forest'
  // | 'lake'
  // | 'imt';
};

export type Kitchen = {
  id: number;
  kitchen: string;
};

export type OutsideReg = {
  id: number;
  images_out_reg: OutsideRegImages[];
  outreg_price: number;
  outreg_conditions: string;
  outreg_include: string;
  place: number;
};

export type OutsideRegImages = {
  id: number;
  image: string;
  outsite_reg: number;
};

export type Feature = {
  id: number;
  type_feature: string;
  //закомментировала для облегчения приведения типов в Preview
  // | 'guestr'
  // | 'room'
  // | 'proj'
  // | 'tv'
  // | 'dance'
  // | 'scen'
  // | 'brid'
  // | 'dress'
  // | 'pan'
  // | 'phot';
};

export type TypePlace = {
  id: number;
  type_place: string;
  //закомментировала для облегчения приведения типов в Preview
  // | 'site'
  //   | 'zags'
  //   | 'present'
  //   | 'photo'
  //   | 'design'
  //   | 'org'
  //   | 'dj'
  //   | 'invit'
  //   | 'video'
  //   | 'flor'
  //   | 'style'
  //   | 'visage'
  //   | 'music'
  //   | 'anim'
  //   | 'chor'
  //   | 'show'
  //   | 'las'
  //   | 'bah'
  //   | 'cad'
  //   | 'weddr'
  //   | 'mensuit'
  //   | 'wedri'
  //   | 'brsmdr'
  //   | 'transp'
  //   | 'barmen'
  //   | 'firew';
};

export type WelcomeZone = {
  id: number;
  images_welcome: WelcomeZoneImage[];
  welcome_desc: string;
  place: number;
};

export type WelcomeZoneImage = {
  id: number;
  image: string;
  welcome_zone: number;
};

export type ImagesWedding = {
  id: number;
  image: string;
  place: number;
};

export type Territory = {
  id: number;
  images_territory: TerritoryImage[];
  territory_desc: string;
  place: number;
};

export type TerritoryImage = {
  id: number;
  image: string;
  territory: number;
};
