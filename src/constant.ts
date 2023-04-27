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
  signUp: '/signup',
  signIn: '/signin',
  renew: '/renew',
};

export const PASSWORD_REQUIREMENTS = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,50}';
export const PASSWORD_TITLE =
  'Пароль должен содержать от 8 до 50 символов, в нем можно использовать цифры, символы и буквы латинского алфавита. При этом обязательно в пароле должна быть хотя бы одна цифра, одна буква в нижнем регистре и одна буква в верхнем регистре.';

export const formFields = {
  userRole: 'userRole',
  username: 'username',
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword',
};
