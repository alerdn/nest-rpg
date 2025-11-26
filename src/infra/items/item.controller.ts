import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemService } from 'src/core/application/services/item-service';

interface CreateItemRequest {
  userId: string;
  name: string;
  type: string;
}

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Post('/:userId')
  public async create(
    @Param('userId') userId: string,
    @Body() body: CreateItemRequest,
  ) {
    return this.itemService.create(userId, body.name, body.type);
  }

  @Get('/:userId')
  public async findAllByUserId(@Param('userId') userId: string) {
    return this.itemService.findAllByUserId(userId);
  }
}
