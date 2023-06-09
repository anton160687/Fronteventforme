import { addPlaceName } from './types/addPlaceNames';
import { LkSectionsType } from './types/lkSectionsType';
export const URL = 'http://188.225.24.70:8080/api/v1/';
export const AUTH_URL = 'http://188.225.24.70:8080/';
export const RESTORE_IMG = `${AUTH_URL}fp/restore/?id=`;

// для dadata
export const CITY_URL =
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address';
export const SUG_URL =
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
export const TOKEN = '343619a9fc7c1a076f2d4bf1892321dabdb238a2';

//Форма создания Place
export const TYPE_AREA: [number, string][] = [
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

export const TERRITORY: [number, string][] = [
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

//для навигации
export enum Paths {
  Home = '/',
  SignUp = '/signup',
  SignIn = '/signin',
  Renew = '/renew',
  Catalog = '/catalog',
  Places = '/catalog/places',
  AddProperty = '/addproperty',
  AddContacts = '/addcontacts',
  Account = '/lk',
  Business = '/business',
  Bride = '/bride',
  AccInfo = '/info',
  AccReviews = '/reviews',
  AccSecurity = '/security',
  AccWishlist = '/wishlist',
}

// для форм регистрации, авторизации
export const PASSWORD_REQUIREMENTS = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,50}';
export const PASSWORD_TITLE =
  'Пароль должен содержать от 8 до 50 символов, в нем можно использовать цифры, символы и буквы латинского алфавита. При этом обязательно в пароле должна быть хотя бы одна цифра, одна буква в нижнем регистре и одна буква в верхнем регистре.';

//вылезает warning, избавиться не смогла, но все работает
export const USERNAME_REQUIREMENTS = '^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$';
export const USERNAME_TITLE =
  'Имя пользователя должно содержать от 2 до 20 символов, в нем можно использовать цифры и буквы латинского алфавита. При этом первый символ обязательно буква.';

export enum FormFields {
  IsBride = 'is_bride',
  Username = 'username',
  Email = 'email',
  Password = 'password',
  ConfirmPassword = 'confirm_password',
  OldPassword = 'old_password',
  NewPassword = 'new_password',
  Phone = 'phone',
  FirstName = 'first_name',
  LastName = 'last_name',
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
  Access = 'access',
  Refresh = 'refresh',
  CreatedAt = 'createdAt',
}

export const TYPE_AREA_DICTIONARY = [
  ['bqh', 'Банкетный зал'],
  ['tent', 'Шатер'],
  ['vrnd', 'Веранда'],
  ['ycc', 'Яхт-клуб'],
  ['mts', 'Теплоход'],
  ['loft', 'Лофт'],
  ['mnr', 'Усадьба'],
  ['rsrn', 'Ресторан'],
  ['cafe', 'Кафе'],
  ['rct', 'База отдыха'],
  ['ctg', 'Коттедж'],
  ['htl', 'Отель'],
  ['cst', 'Замок'],
  ['cntc', 'Загородный клуб'],
  ['cntn', 'Столовая'],
];

export enum LKSectionsTitles {
  Info = 'Основная информация',
  Security = 'Пароль и безопасность',
  Wishlist = 'Избранное',
  Business = 'Мои бизнесы',
  Reviews = 'Отзывы',
  Notification = 'Настройки уведомлений',
  Help = 'Помощь',
  Tariff = 'Тарифы',
  Payment = 'Кабинет для платежей',
  Logout = 'Выйти',
}

export const LKSections: LkSectionsType[] = [
  { title: LKSectionsTitles.Info, link: Paths.AccInfo, icon: 'fi-user' },
  {
    title: LKSectionsTitles.Security,
    link: Paths.AccSecurity,
    icon: 'fi-lock',
  },
  { title: LKSectionsTitles.Business, link: '#', icon: 'fi-home' },
  {
    title: LKSectionsTitles.Wishlist,
    link: Paths.AccWishlist,
    icon: 'fi-heart',
  },
  { title: LKSectionsTitles.Reviews, link: Paths.AccReviews, icon: 'fi-star' },
  { title: LKSectionsTitles.Notification, link: '#', icon: 'fi-bell' },
  { title: LKSectionsTitles.Help, link: '', icon: 'fi-help' },
  { title: LKSectionsTitles.Tariff, link: '', icon: 'fi-cash' },
  { title: LKSectionsTitles.Payment, link: '', icon: 'fi-credit-card' },
  { title: LKSectionsTitles.Logout, link: '', icon: 'fi-logout' },
];
