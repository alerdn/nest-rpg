import { Body, Controller, Post } from '@nestjs/common';
import { ItemService } from 'src/core/application/services/item-service';

interface CreateItemRequest {
  name: string;
  type: string;
}

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Post('/')
  public async create(@Body() body: CreateItemRequest) {
    return this.itemService.create(body.name, body.type);
  }
}
