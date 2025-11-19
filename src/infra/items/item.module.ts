import { Module } from '@nestjs/common';
import { ItemProvider } from './item.provider';
import { ItemController } from './item.controller';
import { ItemService } from 'src/core/application/services/item-service';
import { ItemRepository } from 'src/core/application/repositories/item-repository';
import { DynamooseItemRepository } from './dynamoose-item.repository';

@Module({
  providers: [
    ItemProvider,
    {
      provide: ItemRepository,
      useClass: DynamooseItemRepository,
    },
    ItemService,
  ],
  controllers: [ItemController],
})
export class ItemModule {}
