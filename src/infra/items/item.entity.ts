import { Item } from 'dynamoose/dist/Item';
import { ItemProps } from 'src/core/domain/item';

export class ItemEntity extends Item implements ItemProps {
  userId: string;
  itemId: string;
  name: string;
  type: string;
}
