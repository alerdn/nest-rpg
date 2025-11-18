import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

interface AddWeaponRequest {
  weapon: string;
}

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  public async create() {
    return this.userService.create();
  }

  @Post('/:id/weapons')
  public async addWeapon(
    @Param('id') id: string,
    @Body() body: AddWeaponRequest,
  ) {
    return this.userService.addWeapon(id, body.weapon);
  }

  @Get('/')
  public async index() {
    return this.userService.index();
  }
}
