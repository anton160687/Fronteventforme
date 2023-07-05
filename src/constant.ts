import { LkSectionsType } from './types/lkSectionsType';
export const URL = 'http://188.225.24.70:8080/api/v1/';
export const AUTH_URL = 'http://188.225.24.70:8080/';
export const RESTORE_IMG = `${AUTH_URL}fp/restore/?id=`;
export const API =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_URL : URL;

export const AUTH_API =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_AUTHURL
    : AUTH_URL;

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
  [8, 'Выездная регистрация'],
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
  AccBusinessReviews = '/lk/business/reviews',
  AddChoicePage = '/lk/business/add',
  AddPlace = '/lk/business/add/place',
  AddBusiness = '/lk/business/add/service',
  AddProperty = '/addproperty',
  AddContacts = '/addcontacts',
  Success = '/lk/business/add/success',
  TermsOfUse = '/agreements',
  PrivacyPolicy = '/agreements/privacy',
  WeddingSites = '/wedsites',
  Hashtags = '/hashtags',
  Invitations = '/invite',
  Blog = '/blog',
}

// для форм регистрации, авторизации
export const PASSWORD_REQUIREMENTS = '(?=.*\\p{L})^[\\p{L}\\d]*$';
export const PASSWORD_TITLE =
  'Пароль должен содержать от 8 до 50 символов, пароль может содержать цифры и буквы (минимум 1 буква любого алфавита).';

export const USERNAME_REQUIREMENTS = '[a-zA-Z][a-zA-Z0-9_]{1,20}';
export const USERNAME_TITLE =
  'Имя пользователя должно содержать от 2 до 20 символов, в нем можно использовать цифры, буквы латинского алфавита и знак нижнего подчеркивания. При этом первый символ обязательно буква.';

export const NAME_REQUIREMENTS = '^[\\p{L}]*$';
export const NAME_TITLE = 'Имя должно состоять только из букв.';
export const LAST_NAME_TITLE = 'Фамиоия должна состоять только из букв.';

//! удалю после тестирования тестировщиками)
// export const EMAIL_REQUIREMENTS =
//   '[\\w.\\$\\*\\+\\-\\=\\?\\!\\^\\{\\|\\}\\~\\&\\%\\#\\/\\`]+@[a-z]+\\.[a-z]{2,3}';
// export const EMAIL_TITLE =
//   'Адрес электронной почты имеет стандартный вид: имя_пользователя@почтовый_домен.2-3 символа. Имя пользователя может содержать цифры, латинские буквы и специальные символы: $.*+-=?!_^{|}~&%#/. Почтовый домен и знаки после точки состоят только из латинских букв.';
export const EMAIL_REQUIREMENTS =
  '[a-zA-Z][a-zA-Z_\\d\\p{P}\\p{Sm}\\$\\^]+@[a-zA-Z]+\\.[a-zA-Z]{2,3}';
export const EMAIL_TITLE =
  'Адрес электронной почты имеет стандартный вид: имя_пользователя@почтовый_домен.2-3 символа. Имя пользователя должно начинаться с латинской буквы, так же может содержать цифры, и специальные символы: $.*+-=?!_^{|}~&%#/.';

export const MOBILE_REQUIREMENTS =
  '\\+?(7|8)\\(?[0-9]{3}\\)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}';
export const MOBILE_TITLE =
  'Возможны любые стандартные форматы: от +7/89008000000 до +7/8(900)000-00-00.';

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
  id: number;
  title: string;
  data: {
    id: number;
    name: string;
    url: string;
  }[];
};

export const SERVICES: FooterType = {
  id: 1,
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
  id: 2,
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
  id: 3,
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
  id: 4,
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

export const LKBusinessSections: LkSectionsType[] = [
  { id: 1, title: LKSectionsTitles.Info, path: Paths.AccInfo, icon: 'fi-user' },
  {
    id: 2,
    title: LKSectionsTitles.Security,
    path: Paths.AccSecurity,
    icon: 'fi-lock',
  },
  {
    id: 3,
    title: LKSectionsTitles.Offers,
    path: Paths.AccOffers,
    icon: 'fi-home',
  },
  {
    id: 4,
    title: LKSectionsTitles.Reviews,
    path: Paths.AccReviews,
    icon: 'fi-star',
  },
  {
    id: 5,
    title: LKSectionsTitles.Notification,
    path: Paths.AccNotification,
    icon: 'fi-bell',
  },
  { id: 6, title: LKSectionsTitles.Help, path: Paths.AccHelp, icon: 'fi-help' },
  {
    id: 7,
    title: LKSectionsTitles.Tariff,
    path: Paths.AccTariff,
    icon: 'fi-cash',
  },
  {
    id: 8,
    title: LKSectionsTitles.Payment,
    path: Paths.AccPayment,
    icon: 'fi-credit-card',
  },
];

export const LKBrideSections: LkSectionsType[] = [
  { id: 1, title: LKSectionsTitles.Info, path: Paths.AccInfo, icon: 'fi-user' },
  {
    id: 2,
    title: LKSectionsTitles.Security,
    path: Paths.AccSecurity,
    icon: 'fi-lock',
  },
  {
    id: 3,
    title: LKSectionsTitles.Wishlist,
    path: Paths.AccWishlist,
    icon: 'fi-heart',
  },
  {
    id: 4,
    title: LKSectionsTitles.Reviews,
    path: Paths.AccReviews,
    icon: 'fi-star',
  },
  {
    id: 5,
    title: LKSectionsTitles.Notification,
    path: Paths.AccNotification,
    icon: 'fi-bell',
  },
  { id: 6, title: LKSectionsTitles.Help, path: Paths.AccHelp, icon: 'fi-help' },
  {
    id: 7,
    title: LKSectionsTitles.Payment,
    path: Paths.AccPayment,
    icon: 'fi-credit-card',
  },
];

//для боковой навигации в каталоге и типов бизнеса в ЛК
export const BusinessTypes = [
  { id: 1, name: 'Площадки', path: Paths.Places },
  { id: 2, name: 'Дворец бракосочетания', path: '#' },
  { id: 3, name: 'Фотографы', path: '/catalog/photo' },
  { id: 4, name: 'Музыкальные группы', path: '/catalog/music' },
  { id: 5, name: 'Свадебные платья', path: '/catalog/dresses' },
  { id: 6, name: 'Мужские костюмы', path: '#' },
  { id: 7, name: 'Обручальные кольца', path: '#' },
  { id: 8, name: 'Платья подружек невесты', path: 'dresses' },
  { id: 9, name: 'Стилисты', path: '#' },
  { id: 10, name: 'Визажисты', path: '#' },
  { id: 11, name: 'Оформление и декор', path: '#' },
  { id: 12, name: 'Приглашения', path: '#' },
  { id: 13, name: 'Флористика и букеты', path: '#' },
  { id: 14, name: 'Видеографы', path: '#' },
  { id: 15, name: 'Хореографы', path: '#' },
  { id: 16, name: 'Диджеи', path: '#' },
  { id: 17, name: 'Ведущие', path: '#' },
  { id: 18, name: 'Организаторы', path: '#' },
  { id: 19, name: 'Детские аниматоры', path: '#' },
  { id: 20, name: 'Шоу-программа', path: '#' },
  { id: 21, name: 'Свет и звук', path: '#' },
  { id: 22, name: 'Кейтеринг', path: '#' },
  { id: 23, name: 'Торты и десерты', path: '#' },
  { id: 24, name: 'Красота и здоровье', path: '#' },
  { id: 25, name: 'Транспорт', path: '#' },
  { id: 26, name: 'Бармены', path: '#' },
  { id: 27, name: 'Фейерверки', path: '#' },
];

export enum contextMenuTypeEnum {
  Published = 'published',
  Moderation = 'moderation',
  Draft = 'draft',
  Archive = 'archive',
  Wishlist = 'wishlist',
  Base = 'base',
  Declined = 'declined',
}

//В будущем предлагаю заменить Paths на BreadCrumbsLinks и  убрать LKSectionsTitles
export const BreadCrumbsLinks = {
  Places: { link: '/places', name: 'Площадки' },
  AddChoicePage: { link: '/add', name: 'Добавление бизнеса' },
  AddBusiness: { link: '/service', name: 'Добавить бизнес' },
  AddPlace: { link: '/place', name: 'Добавить площадку' },
  AddProperty: { link: '/addproperty', name: 'Добавить площадку' },
  AddContacts: { link: '/addcontacts', name: 'Добавить контакты' },
};

//JSON-LD
function renderJSONLD(obj: FooterType) {
  type TRes = {
    '@type': string;
    '@id': string;
    name: string;
    about: {
      '@type': string;
      itemListElement: {
        '@type': string;
        name: string;
        url: string;
      }[];
    };
  };

  let result: TRes = {
    '@type': 'SiteNavigationElement',
    '@id': '',
    name: '',
    about: {
      '@type': 'ItemList',
      itemListElement: [],
    },
  };

  result['@id'] = `/#footerNavCol${obj.id}`;
  result['name'] = obj.title;
  obj.data.forEach((datael) => {
    let item = {
      '@type': 'ItemList',
      name: datael.name,
      url: datael.url,
    };
    result.about['itemListElement'].push(item);
  });
  return result;
}

export const schemaData = {
  '@context': 'http://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'EventForMe',
      '@id': 'https://eventforme.ru',
      url: 'https://eventforme.ru',
      logo: 'https://eventforme.ru/img/header/logo.svg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Ленинградский пр-т., 39 стр.14',
        addressLocality: 'Москва',
        postalCode: '109028',
        addressCountry: 'Россия',
      },
      email: 'info@eventforme.ru',
      telephone: '[+561-526-8457]',
      sameAs: [
        '@https://api.whatsapp.com/message/OGH2HQRF5EYHM1?autoload=1&app_absent=0',
        'https://ru.pinterest.com/eventformeru/',
        'https://vk.com/msk_eventforme',
        'https://t.me/event_for_me',
      ],
    },
    {
      '@type': 'WPHeader',
      '@id': '/#header',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': '/#headerNavBar',
      about: {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ItemList',
            name: 'Введите город',
          },
          {
            '@type': 'ItemList',
            name: 'Главная',
            url: Paths.Home,
          },
          {
            '@type': 'ItemList',
            name: 'Каталог',
            itemListElement: BusinessTypes.map((el) => {
              return { '@type': 'ItemList', name: el.name, url: el.path };
            }),
          },
          {
            '@type': 'ItemList',
            name: 'Свадебные сайты',
            url: Paths.WeddingSites,
          },
          {
            '@type': 'ItemList',
            name: 'Хештеги',
            url: Paths.Hashtags,
          },
          {
            '@type': 'ItemList',
            name: 'Приглашения',
            url: Paths.Invitations,
          },
          {
            '@type': 'ItemList',
            name: 'Блог',
            url: Paths.Blog,
          },
          {
            '@type': 'ItemList',
            name: 'Вход',
            url: Paths.SignIn,
          },
          {
            '@type': 'ItemList',
            name: 'Регистрация',
            url: Paths.SignUp,
          },
          {
            '@type': 'ItemList',
            name: 'Личный кабинет',
            url: Paths.Account,
          },
        ],
      },
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': '/#headerNavAuth',
      about: {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ItemList',
            name: 'Вход',
            url: Paths.SignIn,
          },
          {
            '@type': 'ItemList',
            name: 'Регистрация',
            url: Paths.SignUp,
          },
          {
            '@type': 'ItemList',
            name: 'Личный кабинет',
            url: Paths.Account,
          },
        ],
      },
    },
    {
      '@type': 'WPFooter',
      '@id': '/#footer',
      copyrightHolder: 'EventForMe',
      copyrightYear: '2023',
    },
    renderJSONLD(SERVICES),
    renderJSONLD(PAGES),
    renderJSONLD(PLACES),
    renderJSONLD(ACTORS),
    {
      '@type': 'SiteNavigationElement',
      '@id': '/#footerNavBtn',
      name: 'Хочу в каталог',
      url: Paths.AddChoicePage,
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': '/#footerNavConditions',
      about: {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ItemList',
            name: 'Условия пользования',
            url: Paths.TermsOfUse,
          },
          {
            '@type': 'ItemList',
            name: 'Политика конфиденциальности',
            url: Paths.PrivacyPolicy,
          },
        ],
      },
    },
  ],
};
