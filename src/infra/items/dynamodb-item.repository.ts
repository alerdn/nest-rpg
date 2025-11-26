import { ItemRepository } from 'src/core/application/repositories/item-repository';
import { Item } from 'src/core/domain/item';
import { Inject } from '@nestjs/common';
import {
  DynamoDBDocumentClient,
  PutCommand,
  QueryCommand,
  ScanCommand,
} from '@aws-sdk/lib-dynamodb';
import { ItemMapper } from './item.mapper';

export class DynamoDBItemRepository implements ItemRepository {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private repo: DynamoDBDocumentClient,
  ) {}

  public async create(item: Item): Promise<void> {
    const entity = ItemMapper.toEntity(item);

    await this.repo.send(
      new PutCommand({
        TableName: entity.TableName,
        Item: entity.Item,
      }),
    );
  }

  public async findAll(): Promise<Item[]> {
    const response = await this.repo.send(
      new ScanCommand({ TableName: 'Item' }),
    );

    return response.Items as Item[];
  }

  public async findAllByUserId(userId: string): Promise<Item[]> {
    const response = await this.repo.send(
      new QueryCommand({
        TableName: 'Item',
        KeyConditionExpression: 'userId = :userId',
        ExpressionAttributeValues: {
          ':userId': userId,
        },
      }),
    );

    return response.Items as Item[];
  }
}
