import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserProvider } from './user.provider';
import { UserController } from './user.controller';

@Module({
  providers: [UserService, UserProvider],
  controllers: [UserController],
})
export class UserModule {}
