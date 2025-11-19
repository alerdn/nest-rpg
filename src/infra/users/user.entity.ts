import { Item } from 'dynamoose/dist/Item';

export class User extends Item {
  userId: string;
  email: string;
  password: string;
}
