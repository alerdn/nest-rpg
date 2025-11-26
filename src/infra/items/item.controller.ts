import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ItemService } from 'src/core/application/services/item-service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';
import { CurrentUser } from '../auth/user-decorator';
import { TokenPayload } from '../auth/jwt.strategy';

interface CreateItemRequest {
  userId: string;
  name: string;
  type: string;
}

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Post('/')
  @UseGuards(JwtAuthGuard)
  public async create(
    @CurrentUser() user: TokenPayload,
    @Body() body: CreateItemRequest,
  ) {
    return this.itemService.create(user.userId, body.name, body.type);
  }

  @Get('/')
  @UseGuards(JwtAuthGuard)
  public async findAllByUserId(@CurrentUser() user: TokenPayload) {
    return this.itemService.findAllByUserId(user.userId);
  }
}
