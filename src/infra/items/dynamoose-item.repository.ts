import { ModelType } from 'dynamoose/dist/General';
import { ItemRepository } from 'src/core/application/repositories/item-repository';
import { Item } from 'src/core/domain/item';
import { ItemEntity } from './item.entity';
import { Inject } from '@nestjs/common';
import { ItemMapper } from './item.mapper';

export class DynamooseItemRepository implements ItemRepository {
  constructor(
    @Inject('ITEM_MODEL')
    private repo: ModelType<ItemEntity>,
  ) {}

  public async create(item: Item): Promise<void> {
    await this.repo.create({ ...item.props });
  }

  public async findAll(): Promise<Item[]> {
    const itemEntities = await this.repo.scan().exec();
    const items = itemEntities.map((entity) => ItemMapper.toDomain(entity));

    return items;
  }
}
