import { FormFields } from '@/constant';

export type BookingData = {
  name: string;
  guests: number;
  date: Date;
  comments: string;
};

export type CreateUserData = {
  [FormFields.Username]: string;
  [FormFields.Email]: string;
  [FormFields.Password]: string;
  [FormFields.ConfirmPassword]: string;
};

export type SigninUserData = {
  [FormFields.IsBride]: boolean;
  [FormFields.Email]: string;
  [FormFields.Password]: string;
};

export type ContactsFormData = {
  id: number;
  [FormFields.FirstName]: string;
  [FormFields.LastName]: string;
  [FormFields.Email]: string;
  [FormFields.Phone]: string;
};

export type PasswordFromData = {
  [FormFields.Password]: string;
  [FormFields.ConfirmPassword]: string;
};

export type ResetPasswordConfirm = {
  uid: string;
  token: string;
  [FormFields.NewPassword]: string;
};

export type ChangePasswordType = {
  [FormFields.OldPassword]: string;
  [FormFields.NewPassword]: string;
  [FormFields.ConfirmPassword]: string;
};
