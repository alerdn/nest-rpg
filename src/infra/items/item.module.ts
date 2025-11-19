import { Module } from '@nestjs/common';
import { ItemProvider } from './item.provider';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
  providers: [ItemService, ItemProvider],
  controllers: [ItemController],
})
export class ItemModule {}
