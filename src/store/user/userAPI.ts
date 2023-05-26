import { User } from '@/types/user';
import { URL, TEST_URL, Token } from '@/constant';
import {
  CreateUserData,
  ResetPawwrodConfirm,
  SigninUserData,
} from '@/types/forms';

export async function fetchAllUsers(): Promise<User[] | undefined> {
  let response = await fetch(`${URL}users/`);
  if (response.ok) {
    let result = await response.json();
    return result;
  } else {
    console.log(response);
  }
}

export async function fetchUserById(id: number): Promise<User | undefined> {
  let response = await fetch(`${URL}users/${id}/`);
  if (response.ok) {
    let result = await response.json();
    return result;
  } else {
    console.log(response);
  }
}

export async function createUser(data: CreateUserData) {
  let request = {
    email: data.email,
    username: data.username,
    password: data.password,
  };
  try {
    let response = await fetch(`${TEST_URL}auth/users/`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();
    console.log('createUser result', result);
    //	пример ответа
    // email: 'naomi355@yandex.ru';
    // id: 3;
    // username: 'naomi355';
  } catch (error) {
    console.error(error);
  }
}

export async function signinUser(data: SigninUserData) {
  let request = {
    //is_bride
    is_bride: data.is_bride,
    email: data.email,
    password: data.password,
  };
  let response = await fetch(`${TEST_URL}auth/jwt/create/`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });
  if (response.ok) {
    let result = await response.json();
    console.log('signinUser result', result);
    //пример ответа
    // access: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg1MTA5NjgyLCJpYXQiOjE2ODUxMDkzODIsImp0aSI6ImYxYTI5YTJkMzY0MjRiNDdiOWFlZGI0NjhlNTJhY2VjIiwidXNlcl9pZCI6M30.8MiFCGW3EKND59CchN7E-ykG7cFz_FOvxe1IPD7p2Qw';
    // refresh: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4NTE5NTc4MiwiaWF0IjoxNjg1MTA5MzgyLCJqdGkiOiIxNTRmYmI2MGU2MTY0N2NkYTc0OGY0YmU4OTE4YWZhNSIsInVzZXJfaWQiOjN9.0THDseYEVaZwYa-W_Rpt2H0tsTLzOUVrUgrLEJ-wCKA';

    //localStorage.setItem(Token.Default, result.access);
    //localStorage.setItem(Token.Refresh, result.refresh);
    getUserInfo();
  } else {
    console.error('signinUser', response);
  }
}
// тестовый
export async function getUserInfo() {
  const token = localStorage.getItem(Token.Default);

  let response = await fetch(
    `${TEST_URL}auth/users/me/?access_token=${token}/`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
  if (response.ok) {
    let result = await response.json();
    console.log('getUserInfo result', result);
  } else {
    console.error('getUserInfo', response);
  }
}

export async function resendActivationLink(data: string) {
  let request = {
    email: data,
  };
  try {
    let response = await fetch(`${TEST_URL}auth/users/resend_activation/`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();
    console.log('resendActivationLink result', result);
    //ничего в качестве ответа
  } catch (error) {
    console.error('resendActivationLink', error);
  }
}

export async function resetPassword(data: string) {
  let request = {
    email: data,
  };
  try {
    let response = await fetch(`${TEST_URL}auth/users/reset_password/`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();
    console.log('resetPassword result', result);
    //ничего в качестве ответа
  } catch (error) {
    console.error('resetPassword', error);
  }
}

export async function resetPasswordConfirm(data: ResetPawwrodConfirm) {
  let request = {
    uid: data.uid,
    token: data.token,
    new_password: data.new_password,
  };
  let response = await fetch(`${TEST_URL}auth/users/reset_password_confirm/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(request),
  });
  //стоит подумать о том, какие здесь м.б. обработчики ошибок. Пока что просто логирование
  if (response.ok) {
    let result = await response.json();
    console.log('resetPasswordConfirm result', result);
  } else {
    console.error('resetPasswordConfirm', response);
  }
}
