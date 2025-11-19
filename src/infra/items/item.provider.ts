import { model } from 'dynamoose';
import { ItemSchema } from './item.schema';
import { ItemEntity } from './item.entity';

export const ItemProvider = {
  provide: 'ITEM_MODEL',
  useFactory: () => model<ItemEntity>('Item', ItemSchema),
};
