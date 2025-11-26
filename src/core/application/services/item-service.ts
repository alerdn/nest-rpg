import { Injectable } from '@nestjs/common';
import { ItemRepository } from '../repositories/item-repository';
import { Item } from 'src/core/domain/item';
import { randomUUID } from 'node:crypto';

@Injectable()
export class ItemService {
  constructor(private itemRepository: ItemRepository) {}
  public async create(userId: string, name: string, type: string) {
    const item = Item.create({
      userId: userId,
      itemId: randomUUID(),
      name,
      type,
    });

    await this.itemRepository.create(item);

    return item;
  }

  public async findAllByUserId(userId: string) {
    return this.itemRepository.findAllByUserId(userId);
  }
}
