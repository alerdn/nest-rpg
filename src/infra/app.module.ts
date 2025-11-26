import { Module } from '@nestjs/common';
// import { DynamooseModule } from './database/dynamoose.module';
import { UserModule } from './users/user.module';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env';
import { ItemModule } from './items/item.module';
import { DynamodbModule } from './database/dynamodb.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (env) => envSchema.parse(env),
    }),
    DynamodbModule,
    UserModule,
    ItemModule,
  ],
})
export class AppModule {}
