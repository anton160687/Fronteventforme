import { User } from "@/types/user";

const URL = 'https://jsonplaceholder.typicode.com/users';

export async function fetchAllUsers(): Promise<User[] | undefined> {
    let response = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  if (response.ok) {
    let result = await response.json();
    console.log(result);
    return result;
  } else {
    console.log(response);
  }
}