import { Item } from 'src/core/domain/item';
import { ItemEntity } from './item.entity';

export class ItemMapper {
  static toDomain(entity: ItemEntity): Item {
    return Item.create({
      userId: entity.Item.userId,
      itemId: entity.Item.itemId,
      name: entity.Item.name,
      type: entity.Item.type,
    });
  }

  static toEntity(item: Item): ItemEntity {
    return new ItemEntity(item.props);
  }
}
