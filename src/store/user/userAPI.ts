import { User } from "@/types/user";
import { URL, TEST_URL } from "@/constant";
import { CreateUserData, SigninUserData } from "@/types/forms";

export async function fetchAllUsers(): Promise<User[] | undefined> {
    let response = await fetch(`${URL}users/`)
  if (response.ok) {
    let result = await response.json();
    return result;
  } else {
    console.log(response);
  }
}

export async function fetchUserById(id: number): Promise<User | undefined> {
  let response = await fetch(`${URL}users/${id}/`)
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
  let response = await fetch(`${TEST_URL}auth/users/`, {
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
  //пока без роли, ждем исправлений от бэка
  let request = {
    email: data.email,
    password: data.password,
  }
  let response = await fetch(`${TEST_URL}auth/users/`, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request)
  })
  if (response.ok) {
    console.log(response);
    // localStorage.setItem("token", token);
  } else {
    console.log(response);
  }
}