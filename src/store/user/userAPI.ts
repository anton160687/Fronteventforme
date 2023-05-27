import { User } from '@/types/user';
import { TEST_URL, Token } from '@/constant';
import {
  CreateUserData,
  ResetPawwrodConfirm,
  SigninUserData,
} from '@/types/forms';

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
    // пример ответа
    // email: 'email';
    // id: 3;
    // username: 'username';
  } catch (error) {
    console.error(error);
  }
}

export async function signinUser(data: SigninUserData) {
  let request = {
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
    //пример ответа
    // access: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
    // refresh: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....';

    localStorage.setItem(Token.Bearer, result.access);
    localStorage.setItem(Token.BearerRefresh, result.refresh);
    //   getUserInfo();
  } else {
    console.error('signinUser', response);
  }
}

export async function getUserInfo(): Promise<User | undefined> {
  const bearer_token = localStorage.getItem(Token.Bearer);

  let response = await fetch(`${TEST_URL}auth/users/me/`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${bearer_token}`,
    },
  });
  if (response.ok) {
    let result = await response.json();
    return result;
    // пример ответа
    // email: 'email';
    // id: 3;
    // username: 'username';
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

  if (response.ok) {
    let result = await response.json();
    //ничего в качестве ответа
  } else {
    console.error('resetPasswordConfirm', response);
  }
}
