export type BookingData = {
    name: string,
    guests: number,
    date: Date,
    comments: string,
}

export type CreateUserData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  
export type SigninUserData = {
    role: string;
    email: string;
    password: string;
  };