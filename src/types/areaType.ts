export type Area = {
  title: string;
  type_area: string;
  min_capacity: number;
  max_capacity: number;
  color_hall: string;
  separate_entrance: boolean;
  sale: string;
  min_price_banquet: number;
  min_price_rent: number;
  deposit: number;
  detail_location: string;
  scheme_of_payment: string;
  bare_lease: boolean;
  reserved_dates: Date[];
  area_img: string[];
  cover_area: string;
};

/* c бэка
Area:
title - строка; максимальная длина 50
type_area - fk с таблицей TypeArea
min_capacity(минимальная вместимость) - положительное целое число
max_capacity(максимальная вместимость) - положительное целое число
color_hall(вет зала) -строка; 20 символов
separate_entrance(отдельный вход) - логический тип
sale(скидка) - строка; 100 символов
min_price_banquet(минимальная цена банкета) - положительное целое число
min_price_rent(минимальная цена аренды) - положительное целое число
deposit(предоплата) - положительное целое число
detail_location(доп. информация) - строка; 100 символов
place - fk с таблицей Place

*/
