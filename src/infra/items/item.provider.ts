import { Item } from './item.entity';
import { model } from 'dynamoose';
import { ItemSchema } from './item.schema';

export const ItemProvider = {
  provide: 'ITEM_MODEL',
  useFactory: () => model<Item>('Item', ItemSchema),
};
