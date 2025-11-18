import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './user.service';
import { userProvider } from './user.provider';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, userProvider],
  controllers: [UserController],
})
export class UserModule {}
