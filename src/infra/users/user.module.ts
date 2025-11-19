import { Module } from '@nestjs/common';
import { UserProvider } from './user.provider';
import { UserController } from './user.controller';
import { UserService } from 'src/core/application/services/user-service';
import { UserRepository } from 'src/core/application/repositories/user-repository';
import { DynamooseUserRepository } from './dynamoose-user.repository';

@Module({
  providers: [
    UserProvider,
    {
      provide: UserRepository,
      useClass: DynamooseUserRepository,
    },
    UserService,
  ],
  controllers: [UserController],
})
export class UserModule {}
