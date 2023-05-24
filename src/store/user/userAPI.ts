import { User } from '@/types/user';
import { URL, TEST_URL, Token } from '@/constant';
import { CreateUserData, SigninUserData } from '@/types/forms';

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
  } catch (error) {
    console.error(error);
  }
}

export async function signinUser(data: SigninUserData) {
  //пока без роли и почты (вместо этого ждет имя пользователя), ждем исправлений от бэка
  let request = {
    //  is_bride: data.is_bride,
    // email: data.email,
    username: data.username,
    password: data.password,
  };
  let response = await fetch(`${TEST_URL}auth/token/login/`, {
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
    localStorage.setItem(Token.Default, result.auth_token);
    getUserInfo();
  } else {
    console.error('signinUser', response);
  }
}

export async function getUserInfo() {
  const token = localStorage.getItem(Token.Default);

  let response = await fetch(
    `${TEST_URL}auth/users/me/?${JSON.stringify(token)}/`,
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
