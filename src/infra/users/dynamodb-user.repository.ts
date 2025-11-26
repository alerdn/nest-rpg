import { UserRepository } from 'src/core/application/repositories/user-repository';
import { User } from 'src/core/domain/user';
import {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
  QueryCommand,
} from '@aws-sdk/lib-dynamodb';
import { Inject } from '@nestjs/common';
import { UserMapper } from './user.mapper';

export class DynamoDBUserRepository implements UserRepository {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private repo: DynamoDBDocumentClient,
  ) {}

  public async create(user: User): Promise<void> {
    const entity = UserMapper.toEntity(user);

    await this.repo.send(
      new PutCommand({
        TableName: entity.TableName,
        Item: entity.Item,
      }),
    );
  }

  public async findAll(): Promise<User[]> {
    const response = await this.repo.send(
      new ScanCommand({
        TableName: 'User',
      }),
    );

    return response.Items as User[];
  }

  public async findByEmail(email: string): Promise<User | null> {
    const response = await this.repo.send(
      new QueryCommand({
        TableName: 'User',
        IndexName: 'user_email',
        KeyConditionExpression: 'email = :email',
        ExpressionAttributeValues: {
          ':email': email,
        },
        Limit: 1,
      }),
    );

    if (response.Items?.length) {
      return response.Items[0] as User;
    }

    return null;
  }
}
