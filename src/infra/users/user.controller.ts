import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

interface CreateUserRequest {
  email: string;
  password: string;
}

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  public async create(@Body() body: CreateUserRequest) {
    return this.userService.create(body.email, body.password);
  }

  @Get('/')
  public async index() {
    return this.userService.index();
  }
}
