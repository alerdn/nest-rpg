import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Env } from '../env';
import * as dynamoose from 'dynamoose';

@Module({
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      inject: [ConfigService],
      useFactory: (config: ConfigService<Env, true>) => {
        const NODE_ENV = config.get('NODE_ENV', { infer: true });

        if (NODE_ENV === 'production') {
          const dbConfig = {
            credentials: {
              accessKeyId: config.get('AWS_ACCESS_KEY_ID', { infer: true }),
              secretAccessKey: config.get('AWS_SECRET_ACCESS_KEY', {
                infer: true,
              }),
            },
            region: config.get('AWS_REGION', { infer: true }),
          };

          const ddb = new dynamoose.aws.ddb.DynamoDB(dbConfig);
          dynamoose.aws.ddb.set(ddb);
        } else {
          dynamoose.aws.ddb.local('http://localhost:8000');
        }
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}
