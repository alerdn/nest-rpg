import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Env } from '../env';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

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

          const client = new DynamoDBClient(dbConfig);
          const docClient = DynamoDBDocumentClient.from(client);

          return docClient;
        } else {
          const client = new DynamoDBClient({
            region: 'local',
            endpoint: 'http://localhost:8000',
          });
          const docClient = DynamoDBDocumentClient.from(client);

          return docClient;
        }
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DynamodbModule {}
