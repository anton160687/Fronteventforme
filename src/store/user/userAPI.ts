import { User } from "@/types/user";
import { URL } from "@/constant";
import { CreateUserData, SigninUserData } from "@/types/forms";

const API = process.env.NODE_ENV === 'production'? process.env.URL : URL;

export async function fetchAllUsers(): Promise<User[] | undefined> {
    let response = await fetch(`${API}users/`)
  if (response.ok) {
    let result = await response.json();
    return result;
  } else {
    console.log(response);
  }
}

export async function fetchUserById(id: number): Promise<User | undefined> {
  let response = await fetch(`${API}users/${id}/`)
if (response.ok) {
  let result = await response.json();
  return result;
} else {
  console.log(response);
}}

export async function createUser (data: CreateUserData) {
  let request = {
    email: data.email,
    username: data.username,
    password: data.password,
  }
  let response = await fetch(`${API}auth/users/`, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request)
  })
  if (!response.ok) {
    console.log(response);
  }
}

export async function signinUser (data: SigninUserData) {
  let request = {
    is_bride: data.is_bride,
    email: data.email,
    password: data.password,
  }
  let response = await fetch(`${API}auth/token/login/`, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request)
  })
  if (response.ok) {
    let result = await response.json();
    console.log(result);
    localStorage.setItem("token", result.auth_token);
  } else {
    console.log(response);
  }
}