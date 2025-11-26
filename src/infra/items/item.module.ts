import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { ItemService } from 'src/core/application/services/item-service';
import { ItemRepository } from 'src/core/application/repositories/item-repository';
import { DynamoDBItemRepository } from './dynamodb-item.repository';
import { DynamodbModule } from '../database/dynamodb.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [DynamodbModule, AuthModule],
  providers: [
    {
      provide: ItemRepository,
      useClass: DynamoDBItemRepository,
    },
    ItemService,
  ],
  controllers: [ItemController],
})
export class ItemModule {}
