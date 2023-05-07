import { Col } from "react-bootstrap";

export const URL = 'http://letarist.pythonanywhere.com/api/test_api/';

// для dadata
export const CITY_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address';
export const SUG_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
export const TOKEN = '343619a9fc7c1a076f2d4bf1892321dabdb238a2';

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
  signUp: '/signup',
  signIn: '/signin',
  renew: '/renew',
  catalog: '/catalog',
  places: '/places',
};

export const PASSWORD_REQUIREMENTS = '[?=.*\\d][?=.*[a-z]][?=.*[A-Z]].{8,50}';
export const PASSWORD_TITLE =
  'Пароль должен содержать от 8 до 50 символов, в нем можно использовать цифры, символы и буквы латинского алфавита. При этом обязательно в пароле должна быть хотя бы одна цифра, одна буква в нижнем регистре и одна буква в верхнем регистре.';

export const formFields = {
  userRole: 'userRole',
  username: 'username',
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword',
};

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


//add-property
export const TYPE_AREA = [
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
]

export const EVENT = [
  ['wed', 'Свадьба'],
  ['birth', 'День рождения'],
  ['nyr', 'Новый год'],
  ['buf', 'Фуршет'],
  ['bach', 'Мальчишник'],
  ['bclt', 'Девичник'],
  ['cmp', 'Корпоратив'],
  ['fest', 'Праздничный банкет'],
  ['grd', 'Выпускной'],

]

export const KITCHEN = [
  ['eur', 'Европейская'],
  ['asia', 'Азиатская'],
  ['rus', 'Русская'],
  ['cau', 'Кавказская'],
  ['ita', 'Итальянская'],
  ['jap', 'Японская'],
  ['kor', 'Корейская'],
  ['other', 'Другая'],
]

export const LOCATION = [
  ['sea', 'Около моря'],
  ['river', 'Около реки'],
  ['outc', 'За городом'],
  ['inc', 'В городе'],
  ['icc', 'В центре города'],
  ['forest', 'В лесу'],
  ['lake', 'Около озера'],
  ['imt', 'В горах'],
]

//для помещения

export const COLOR_HALL = [
  'Белый',
  'Розовый',
  'Голубой',
  'Зеленый',
  'Синий',
  'Фиолетовый',
  'Красный',
  'Оранжевый',
  'Желтый',
  'Бежевый',
  'Золотой',
  'Серебряный',
]

export const TERRITORY = [
  ['park', 'Своя парковка'],
  ['welc', 'Welcome-зона'],
  ['fire', 'Место под фаер-шоу'],
  ['firew', 'Можно фейерверк'],
  ['hotel', 'Отель рядом'],
  ['kids', 'Детская игровая зона'],
  ['phot', 'Фотозона'],
  ['reg', 'С выездной регистрацией'],
  ['pan', 'Панорамный вид'],
  ['guesth', 'Отель для гостей'],
]

export const FEATURES = [
  ['guestr', 'Номер для гостей'],
  ['room', 'Номер для новобрачных'],
  ['proj', 'Есть проектор'],
  ['tv', 'ТВ-экраны'],
  ['danc', 'Есть танцпол'],
  ['scen', 'Есть сцена'],
  ['brid', 'Есть комната невесты'],
  ['dress', 'Есть примерочная'],
  ['pan', 'Панорамный вид'],
  ['phot', 'Фотозона'],
]

export const SCHEME_OF_PAYMENT = [
  ['l+b', "Аренда зала + банкет"],
  ['l', "Только аренда зала"],
  ['b', "Только банкет"],
]