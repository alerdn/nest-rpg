import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

interface LoginRequest {
  email: string;
  password: string;
}

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  public async login(@Body() body: LoginRequest) {
    return this.authService.login(body.email, body.password);
  }
}
