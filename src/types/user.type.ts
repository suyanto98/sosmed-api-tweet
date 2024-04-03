export interface Iuser {
  id: number;
  email: string;
  username: string;
  password: string;
  bio?: string;
  avatar?: string;
  cover?: string;
  isDeleted: boolean;
  createAt: Date;
  updateAt: Date;
}
