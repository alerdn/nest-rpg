import { Body, Controller, Post } from '@nestjs/common';
import { ItemService } from './item.service';

interface CreateItemRequest {
  userId: string;
  name: string;
  type: string;
}

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Post('/')
  public async create(@Body() body: CreateItemRequest) {
    return this.itemService.create(body.userId, body.name, body.type);
  }
}
