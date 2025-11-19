import { Item } from 'src/core/domain/item';
import { ItemEntity } from './item.entity';
import { model } from 'dynamoose';

export class ItemMapper {
  static toDomain(entity: ItemEntity): Item {
    return Item.create({
      itemId: entity.itemId,
      name: entity.name,
      type: entity.type,
    });
  }

  static toEntity(item: Item): ItemEntity {
    return new ItemEntity(model('Item'), item);
  }
}
