import { Item as DynamooseItem } from 'dynamoose/dist/Item';

export class Item extends DynamooseItem {
  userId: string;
  itemId: string;
  name: string;
  type: string;
}
