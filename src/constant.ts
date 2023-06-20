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
  Account = '/lk',
  Business = '/business',
  Bride = '/bride',
  AccBusiness = '/lk/business',
  AccBride = '/lk/bride',
  AccInfo = '/',
  AccReviews = '/reviews',
  AccSecurity = '/security',
  AccWishlist = '/wishlist',
  AccNotification = '/notification',
  AccOffers = '/offers',
  AccHelp = '/help',
  AccTariff = '/tariff',
  AccPayment = '/payment',
  AccMyBusiness = '/lk/business/my',
  AccBusinessReviews = '/lk/business/reviews',
  AddPlace = '/lk/business/add/place',
  AddBusiness = '/lk/business/add/business',
  AddProperty = '/addproperty',
  AddContacts = '/addcontacts',
  Success = '/lk/business/add/success',
}

// для форм регистрации, авторизации
export const PASSWORD_REQUIREMENTS = '(?=.*\\p{L})^[\\p{L}\\d]*$';

export const PASSWORD_TITLE =
  'Пароль должен содержать от 8 до 50 символов, пароль может содержать цифры и буквы (минимум 1 буква любого алфавита).';

//вылезает warning, избавиться не смогла, но все работает
export const USERNAME_REQUIREMENTS = '[a-zA-Z][a-zA-Z0-9_]{1,20}';
export const USERNAME_TITLE =
  'Имя пользователя должно содержать от 2 до 20 символов, в нем можно использовать цифры, буквы латинского алфавита и знак нижнего подчеркивания. При этом первый символ обязательно буква.';

export const EMAIL_REQUIREMENTS =
  '[\\w.\\$\\*\\+\\-\\=\\?\\!\\^\\{\\|\\}\\~\\&\\%\\#\\/\\`]+@[a-z]+\\.[a-z]{2,3}';
export const EMAIL_TITLE =
  'Адрес электронной почты имеет стандартный вид: имя_пользователя@почтовый_домен.2-3 символа. Имя пользователя может содержать цифры, латинские буквы и специальные символы: $.*+-=?!_^{|}~&%#/. Почтовый домен и знаки после точки состоят только из латинских букв.';

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
export const ADD_PLACE_NAMES = {
  basic: { id: 'basic-info', name: 'Базовая информация' },
  location: { id: 'location', name: 'Локация' },
  description: { id: 'description', name: 'Описание площадки' },
  mainPhotos: { id: 'photos', name: 'Фото площадки' },
  area: { id: 'area-', name: 'Помещения' },
  details: { id: 'details', name: 'Детали площадки' },
  weddingAlbum: { id: 'wedding', name: 'Альбомы проведенных свадеб' },
  basicBusiness: { id: 'basic-bus', name: 'О себе' },
  detailsBusiness: { id: 'details-bus', name: 'Детали работы' },
  service: { id: 'service-', name: 'Услуги' },
};

//для авторизации
export enum Token {
  Access = 'access',
  Refresh = 'refresh',
  CreatedAt = 'createdAt',
}

export enum LKSectionsTitles {
  Info = 'Основная информация',
  Security = 'Пароль и безопасность',
  Wishlist = 'Избранное',
  Offers = 'Мои бизнесы',
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
  { title: LKSectionsTitles.Offers, link: Paths.AccOffers, icon: 'fi-home' },
  {
    title: LKSectionsTitles.Wishlist,
    link: Paths.AccWishlist,
    icon: 'fi-heart',
  },
  { title: LKSectionsTitles.Reviews, link: Paths.AccReviews, icon: 'fi-star' },
  {
    title: LKSectionsTitles.Notification,
    link: Paths.AccNotification,
    icon: 'fi-bell',
  },
  { title: LKSectionsTitles.Help, link: Paths.AccHelp, icon: 'fi-help' },
  { title: LKSectionsTitles.Tariff, link: Paths.AccTariff, icon: 'fi-cash' },
  {
    title: LKSectionsTitles.Payment,
    link: Paths.AccPayment,
    icon: 'fi-credit-card',
  },
];

//для боковой навигации в каталоге и типов бизнеса в ЛК
export const BusinessTypes = [
  { name: 'Площадки', path: '/catalog/places' },
  { name: 'Дворец бракосочетания', path: '#' },
  { name: 'Фотографы', path: '/catalog/photo' },
  { name: 'Музыкальные группы', path: '/catalog/music' },
  { name: 'Свадебные платья', path: '/catalog/dresses' },
  { name: 'Мужские костюмы', path: '#' },
  { name: 'Обручальные кольца', path: '#' },
  { name: 'Платья подружек невесты', path: 'dresses' },
  { name: 'Стилисты', path: '#' },
  { name: 'Визажисты', path: '#' },
  { name: 'Оформление и декор', path: '#' },
  { name: 'Приглашения', path: '#' },
  { name: 'Флористика и букеты', path: '#' },
  { name: 'Видеографы', path: '#' },
  { name: 'Хореографы', path: '#' },
  { name: 'Диджеи', path: '#' },
  { name: 'Ведущие', path: '#' },
  { name: 'Организаторы', path: '#' },
  { name: 'Детские аниматоры', path: '#' },
  { name: 'Шоу-программа', path: '#' },
  { name: 'Свет и звук', path: '#' },
  { name: 'Кейтеринг', path: '#' },
  { name: 'Торты и десерты', path: '#' },
  { name: 'Красота и здоровье', path: '#' },
  { name: 'Транспорт', path: '#' },
  { name: 'Бармены', path: '#' },
  { name: 'Фейерверки', path: '#' },
];

export enum contextMenuTypeEnum {
  Published = 'published',
  Moderation = 'moderation',
  Draft = 'draft',
  Archive = 'archive',
  Wishlist = 'wishlist',
  Base = 'base',
}
