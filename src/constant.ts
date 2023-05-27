import { addPlaceName } from './types/addPlaceNames';

export const URL = 'http://letarist.pythonanywhere.com/api/test_api/';
export const TEST_URL = 'http://188.225.24.70:8080/';

// для dadata
export const CITY_URL =
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address';
export const SUG_URL =
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
export const TOKEN = '343619a9fc7c1a076f2d4bf1892321dabdb238a2';

//Форма создания Place
export const TYPE_AREA = [
  [1, 'Банкетный зал'],
  [2, 'Шатер'],
  [3, 'Веранда'],
  [4, 'Яхт-клуб'],
  [5, 'Теплоход'],
  [6, 'Лофт'],
  [7, 'Усадьба'],
  [8, 'Ресторан'],
  [9, 'Кафе'],
  [10, 'База отдыха'],
  [11, 'Коттедж'],
  [12, 'Отель'],
  [13, 'Замок'],
  [14, 'Загородный клуб'],
  [15, 'Столовая'],
];
export const EVENT = [
  [1, 'Свадьба'],
  [2, 'День рождения'],
  [3, 'Новый год'],
  [4, 'Фуршет'],
  [5, 'Мальчишник'],
  [6, 'Девичник'],
  [7, 'Корпоратив'],
  [8, 'Праздничный банкет'],
  [9, 'Выпускной'],
];
export const KITCHEN = [
  [1, 'Европейская'],
  [2, 'Азиатская'],
  [3, 'Русская'],
  [4, 'Кавказская'],
  [5, 'Итальянская'],
  [6, 'Японская'],
  [7, 'Корейская'],
  [8, 'Другая'],
];
export const LOCATION = [
  [1, 'Около моря'],
  [2, 'Около реки'],
  [3, 'За городом'],
  [4, 'В городе'],
  [5, 'В центре города'],
  [6, 'В лесу'],
  [7, 'Около озера'],
  [8, 'В горах'],
];

export const FEATURES = [
  [1, 'Номер для гостей'],
  [2, 'Номер для новобрачных'],
  [3, 'Есть проектор'],
  [4, 'ТВ-экраны'],
  [5, 'Есть танцпол'],
  [6, 'Есть сцена'],
  [7, 'Есть комната невесты'],
  [8, 'Есть примерочная'],
  [9, 'Панорамный вид'],
  [10, 'Фотозона'],
];

export const TERRITORY = [
  [1, 'Своя парковка'],
  [2, 'Welcome-зона'],
  [3, 'Место под фаер-шоу'],
  [4, 'Можно фейерверк'],
  [5, 'Отель рядом'],
  [6, 'Детская игровая зона'],
  [7, 'Фотозона'],
  [8, 'С выездной регистрацией'],
  [9, 'Панорамный вид'],
  [10, 'Отель для гостей'],
];

//Форма Area
export const COLOR_HALL = [
  ['white', 'Белый'],
  ['pink', 'Розовый'],
  ['red', 'Красный'],
  ['orange', 'Оранжевый'],
  ['yellow', 'Желтый'],
  ['green', 'Зеленый'],
  ['lblue', 'Голубой'],
  ['blue', 'Синий'],
  ['purple', 'Фиолетовый'],
  ['beige', 'Бежевый'],
];

export const SCHEME_OF_PAYMENT = [
  ['bah', 'Аренда зала + банкет'],
  ['ban', 'Только аренда зала'],
  ['hall', 'Только банкет'],
];

// для фильтров [PlaceFilters] на странице каталога
export const OPTIONS_CAPACITY = [
  ['10-30', 'от 10 до 30'],
  ['30-60', 'от 30 до 60'],
  ['60-100', 'от 60 до 100'],
  ['100-150', 'от 100 до 150'],
  ['150', 'от 150'],
];
export const OPTIONS_STYLE = [
  ['loft', 'Лофт'],
  ['rustik', 'Рустик'],
  ['classic', 'Классический'],
  ['other', 'Другое'],
];
export const OPTIONS_PRICE = [
  ['1000', 'до 1000 ₽'],
  ['1000-2000', 'от 1000 ₽ до 2000 ₽'],
  ['2000-3000', 'от 2000 ₽ до 3000 ₽'],
  ['other', 'Другое'],
];
export const OPTIONS_TERRITORY = [
  ['park', 'Своя парковка'],
  ['welc', 'Welcome-зона'],
  ['fire', 'Место под фаер-шоу'],
  ['firew', 'Можно фейерверк'],
  ['hotel', 'Отель рядом'],
  ['kids', 'Детская игровая зона'],
  ['phot', 'Фотозона'],
  ['reg', 'С выездной регистрацией'],
  ['pan', 'Панорамный вид'],
  ['guest', 'Отель для гостей'],
];
export const OPTIONS_MORE = [
  ['1000', 'до 1000 ₽'],
  ['1000-2000', 'от 1000 ₽ до 2000 ₽'],
  ['2000-3000', 'от 2000 ₽ до 3000 ₽'],
  ['other', 'Другое'],
];
export const OPTIONS_ADD = [
  ['1000', 'Аренда без еды'],
  ['1000-2000', 'Свой алкоголь'],
  ['2000-3000', 'Без проб. сбора'],
  ['other', 'Можно праздновать после 23:00'],
];

//ссылки для навигации
export const Paths = {
  SignUp: '/signup',
  SignIn: '/signin',
  Renew: '/renew',
  Catalog: '/catalog',
  Places: '/places',
  AddProperty: '/addproperty',
  AddContacts: '/addcontacts',
  Home: '/',
};

// для форм регистрации, авторизации
export const PASSWORD_REQUIREMENTS = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}';
export const PASSWORD_TITLE =
  'Пароль должен содержать от 8 до 20 символов, в нем можно использовать цифры, символы и буквы латинского алфавита. При этом обязательно в пароле должна быть хотя бы одна цифра, одна буква в нижнем регистре и одна буква в верхнем регистре.';

//вылезает warning, избавиться не смогла, но все работает
export const USERNAME_REQUIREMENTS = '^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$';
export const USERNAME_TITLE =
  'Имя пользователя должно содержать от 2 до 20 символов, в нем можно использовать цифры и буквы латинского алфавита. При этом первый символ обязательно буква.';

export enum FormFields {
  IsBride = 'is_bride',
  Username = 'username',
  Email = 'email',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
}

// для футера
export type FooterType = {
  title: string;
  data: {
    id: number;
    name: string;
    url: string;
  }[];
};

export const SERVICES: FooterType = {
  title: 'Услуги',
  data: [
    {
      id: 1,
      name: 'Чек-листы',
      url: '#',
    },
    {
      id: 2,
      name: 'Калькулятор бюджета',
      url: '#',
    },
    {
      id: 3,
      name: 'Рассадка гостей',
      url: '#',
    },
    {
      id: 5,
      name: 'Свадебные приглашения',
      url: '#',
    },
    {
      id: 6,
      name: 'Свадебные сайты',
      url: '#',
    },
    {
      id: 7,
      name: 'Найти подрядчиков',
      url: '#',
    },
  ],
};

export const PAGES: FooterType = {
  title: 'Страницы',
  data: [
    {
      id: 1,
      name: 'Каталог',
      url: '/catalog',
    },
    {
      id: 2,
      name: 'Свадебные вдохновения',
      url: '#',
    },
    {
      id: 3,
      name: 'Свадебный сайт',
      url: '#',
    },
    {
      id: 5,
      name: 'Хештеги',
      url: '#',
    },
    {
      id: 6,
      name: 'Приглашения',
      url: '#',
    },
    {
      id: 7,
      name: 'Блог',
      url: '#',
    },
  ],
};

export const PLACES: FooterType = {
  title: 'Площадки',
  data: [
    {
      id: 1,
      name: 'Каталог',
      url: '/catalog',
    },
    {
      id: 2,
      name: 'Свадебные вдохновения',
      url: '#',
    },
    {
      id: 3,
      name: 'Свадебный сайт',
      url: '#',
    },
    {
      id: 5,
      name: 'Хештеги',
      url: '#',
    },
    {
      id: 6,
      name: 'Приглашения',
      url: '#',
    },
    {
      id: 7,
      name: 'Блог',
      url: '#',
    },
  ],
};

export const ACTORS: FooterType = {
  title: 'Исполнители',
  data: [
    {
      id: 1,
      name: 'Каталог',
      url: '/catalog',
    },
    {
      id: 2,
      name: 'Свадебные вдохновения',
      url: '#',
    },
    {
      id: 3,
      name: 'Свадебный сайт',
      url: '#',
    },
    {
      id: 5,
      name: 'Хештеги',
      url: '#',
    },
    {
      id: 6,
      name: 'Приглашения',
      url: '#',
    },
    {
      id: 7,
      name: 'Блог',
      url: '#',
    },
  ],
};

//names для формы добавления площадки - для progressbar
export const ADD_PLACE_NAMES: addPlaceName = {
  basic: { id: 'basic-info', name: 'Базовая информация' },
  location: { id: 'location', name: 'Локация' },
  description: { id: 'description', name: 'Описание площадки' },
  mainPhotos: { id: 'photos', name: 'Фото площадки' },
  area: { id: 'area-', name: 'Помещения' },
  details: { id: 'details', name: 'Детали площадки' },
  weddingAlbum: { id: 'wedding', name: 'Альбомы проведенных свадеб' },
};

//для авторизации
export enum Token {
  Default = 'token',
  Refresh = 'refresh',
  Bearer = 'bearer_token',
  BearerRefresh = 'bearer_refresh',
}
