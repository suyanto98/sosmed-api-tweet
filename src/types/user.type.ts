export interface Iuser {
  id: number;
  email: string;
  username: string;
  password: string;
  isDeleted: boolean;
  createAt: Date;
  updateAt: Date;
}
