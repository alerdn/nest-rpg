import { Item } from 'src/core/domain/item';

export abstract class ItemRepository {
  abstract create(item: Item): Promise<void>;
  abstract findAll(): Promise<Item[]>;
  abstract findAllByUserId(userId: string): Promise<Item[]>;
}
