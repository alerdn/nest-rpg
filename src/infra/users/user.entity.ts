import { Item } from 'dynamoose/dist/Item';

export class User extends Item {
  id: string;
  'inventory::armor': string[];
  'inventory::weapon': string[];
}
