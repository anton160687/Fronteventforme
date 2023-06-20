import { User } from '@/types/user';
import { AUTH_URL, Token } from '@/constant';
import {
  CreateUserData,
  ResetPasswordConfirm,
  SigninUserData,
} from '@/types/forms';
import { saveAuthData } from '@/services/auth.service';

const API =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_AUTHURL
    : AUTH_URL;

export async function createUser(data: CreateUserData) {
  let request = {
    email: data.email,
    username: data.username,
    password: data.password,
  };

  let response = await fetch(`${API}auth/users/`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (response.ok) {
    const result: { id: number; email: string; username: string } =
      await response.json();

    return 'success';
  } else {
    const errorBody = await response.clone().json();
    let errorText = '';

    for (const [key, value] of Object.entries(errorBody)) {
      errorText += `✖ ${value}` + '\n';
    }
    return errorText;
  }
}

export async function signinUser(data: SigninUserData) {
  let request = {
    is_bride: data.is_bride,
    email: data.email,
    password: data.password,
  };
  let response = await fetch(`${API}auth/jwt/create/`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (response.ok) {
    let result = await response.json();
    saveAuthData(result, data.is_bride);
    return 'success';
  } else {
    const errorBody = await response.clone().json();
    let errorText = '';

    for (const [key, value] of Object.entries(errorBody)) {
      errorText += `✖ ${value}` + '\n';
    }

    return errorText;
  }
}

export async function authoriseUser(refreshToken: string) {
  let request = {
    refresh: refreshToken,
  };
  let response = await fetch(`${API}auth/jwt/refresh/`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (response.ok) {
    // приходит только access токен
    let result: { access: string } = await response.json();
    localStorage.setItem(Token.Access, result.access);
    return 'success';
  } else {
    console.error('refreshToken', response);
  }
}

export async function getUserInfo(): Promise<User | undefined> {
  const token = localStorage.getItem(Token.Access);

  let response = await fetch(`${API}auth/users/me/`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
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
    let response = await fetch(`${API}auth/users/resend_activation/`, {
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
    let response = await fetch(`${API}auth/users/reset_password/`, {
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

export async function resetPasswordConfirm(data: ResetPasswordConfirm) {
  let request = {
    uid: data.uid,
    token: data.token,
    new_password: data.new_password,
  };
  let response = await fetch(`$API}auth/users/reset_password_confirm/`, {
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
