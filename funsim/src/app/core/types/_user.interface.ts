export interface IUser {
  id: number;
  phone: string;
  name: string | null;
  patronymic: string | null;
  surname: string | null;
  passport_image: string | null;
  avatar?: string | null;
  token: string;
}
