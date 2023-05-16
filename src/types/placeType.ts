export type Place = {
    title: string;
    city: string;
    metro?: string;
    address: string;
    geodata: number [];
    id_yandex?: string;
    start_time: Date;
    finish_time: Date;
    location: string[];
    fireworks: boolean;
    kitchen: string[];
    event: string[];
    features: string[];
    territory: string[];
    children_kitchen: boolean;
    alco: boolean;
    payment_of_alco: number;
    lease_extension: boolean;
    lease_extension_price: number;
    average_check: number;
    description: string;
    max_serving: number;
    parking: number;
    territory_desc: string;
    welcome_desc: string;
    outreg_price: number;
    outreg_desc: string;
    outreg_conditions: string;
}

export type Album = {
  title: string;
  album_img: string[];
};

/* с бэка
title - строка; максимальная длина 50
city - строка; максимальная длина 20
metro - строка; 20 символов
address - строка; 300 символов
start_time - время (TimeField)
finish_time - время (TimeField)
location - m2m с таблицей Location
fireworks - Логический тип
kitchen - m2m с таблицей Kitchen
children_kitchen - логический тип
alco(можно со своим алко или нет) - логический тип
scheme_of_payment(схема оплаты) - строка; выпадающий список. 4 символа
corkage_fee(пробковый сбор) - логический тип
payment_of_alco(цена за свой алкоголь) - положительное целое число
lease_extension(продление аренды) - логический тип
lease_extension_price(стоимость продления) - положительное целое число
average_check(средний чек) - положительное целое число
event - m2m с таблицей Event
description - текст
*/
