import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from 'src/core/application/services/user-service';
import { UserRepository } from 'src/core/application/repositories/user-repository';
import { DynamoDBUserRepository } from './dynamodb-user.repository';
import { DynamodbModule } from '../database/dynamodb.module';

@Module({
  imports: [DynamodbModule],
  providers: [
    {
      provide: UserRepository,
      useClass: DynamoDBUserRepository,
    },
    UserService,
  ],
  controllers: [UserController],
})
export class UserModule {}
