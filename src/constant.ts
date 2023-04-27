export const URL = 'http://letarist.pythonanywhere.com/api/test_api/';

// для футера
export type FooterConst = {
  title: string;
  data: {
    id: number;
    name: string;
    url: string;
  }[];
};

export const SERVICES: FooterConst = {
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

export const PAGES: FooterConst = {
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

export const PLACES: FooterConst = {
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

export const ACTORS: FooterConst = {
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

export const PATHS = {
  signUp: '/signUp',
  signIn: '/signIn',
  forgotPassword: '/forgotPassword',
};

export const PASSWORD_REQUIREMENTS = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,50}';
export const PASSWORD_TITLE =
  'Пароль должен содержать от 8 до 50 символов, в нем можно использовать цифры, символы и буквы латинского алфавита. При этом обязательно в пароле должна быть хотя бы одна цифра, одна буква в нижнем регистре и одна буква в верхнем регистре.';


// для фильтров (PlaceFilters) на странице каталога
export const OPTIONS_CAPACITY = [
  ['10-30', 'от 10 до 30'],
  ['30-60', 'от 30 до 60'],
  ['60-100', 'от 60 до 100'],
  ['100-150', 'от 100 до 150'],
  ['150', 'от 150'],
]

export const OPTIONS_STYLE = [
  ['loft', 'Лофт'],
  ['rustik', 'Рустик'],
  ['classic', 'Классический'],
  ['other', 'Другое'],
]

export const OPTIONS_PRICE = [
  ['1000', 'до 1000 ₽'],
  ['1000-2000', 'от 1000 ₽ до 2000 ₽'],
  ['2000-3000', 'от 2000 ₽ до 3000 ₽'],
  ['other', 'Другое'],
]

export const OPTIONS_TERRITORY = [
  ['welcome', 'Welcome-зона'],
  ['photozone', 'Фотозона'],
  ['guesthouse', 'Проживание гостей'],
  ['parking', 'Своя парковка'],
  ['registration', 'С выездной регистрацией'],
  ['firework', 'Можно фейерверк'],
]

export const OPTIONS_MORE = [
  ['1000', 'до 1000 ₽'],
  ['1000-2000', 'от 1000 ₽ до 2000 ₽'],
  ['2000-3000', 'от 2000 ₽ до 3000 ₽'],
  ['other', 'Другое'],
]

export const OPTIONS_ADD = [
  ['1000', 'Аренда без еды'],
  ['1000-2000', 'Свой алкоголь'],
  ['2000-3000', 'Без проб. сбора'],
  ['other', 'Можно праздновать после 23:00'],
]