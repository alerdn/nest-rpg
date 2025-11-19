import { Inject, Injectable } from '@nestjs/common';
import { ModelType } from 'dynamoose/dist/General';
import { Item } from './item.entity';

@Injectable()
export class ItemService {
  constructor(
    @Inject('ITEM_MODEL')
    private itemRepository: ModelType<Item>,
  ) {}

  public async create(userId: string, name: string, type: string) {
    const item = await this.itemRepository.create({
      userId: userId,
      itemId: crypto.randomUUID(),
      name: name,
      type: type,
    });
    return item;
  }
}
