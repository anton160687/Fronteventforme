export type Area = {
  place_id?: number;
  title: string;
  cover_area: string;
  type_area: TypeArea;
  min_capacity: number;
  max_capacity: number;
  color_hall: string;
  separate_entrance: boolean;
  sale: string;
  min_price_banquet: number;
  min_price_rent: number;
  deposit: number;
  scheme_of_payment: string;
  detail_location: string;
  images_area: AreaImages[] | [];
  bare_lease?: boolean;
  reserved_days: string;
  // reserved_dates: Date[];
};

// color_hall: 'white';
// cover_area: 'http://188.225.24.70:8080/media/cover_area/panton.jpg';
// deposit: 15000;
// detail_location: 'Красота';
// id: 1;
// images_area: [];
// max_capacity: 100;
// min_capacity: 10;
// min_price_banquet: 10000;
// min_price_rent: 20000;
// place: 1;
// reserved_days: '2023-05-25';
// sale: '500';
// scheme_of_payment: 'bah';
// separate_entrance: true;
// title: 'Пантеон';
// type_area: {
//   id: 2;
//   type_area: 'tent';
// }

//тип приходящего с бека Area
export type AreaRecieved = Omit<
  Area,
  'type_area' | 'images_area' | 'place_id' | 'color_hall'
> & {
  images_area: AreaImages[] | [];
  type_area: TypeArea;
  place: number;
  color_hall:
    | 'white'
    | 'pink'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'lblue'
    | 'blue'
    | 'purple'
    | 'beige';
};

type TypeArea = {
  id: number;
  type_area: string;
};

export type AreaImages = {
  id: number;
  image: string;
  area: number;
};
