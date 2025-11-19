import { ModelType } from 'dynamoose/dist/General';
import { UserRepository } from 'src/core/application/repositories/user-repository';
import { User } from 'src/core/domain/user';
import { UserEntity } from './user.entity';
import { UserMapper } from './user.mapper';
import { Inject } from '@nestjs/common';

export class DynamooseUserRepository implements UserRepository {
  constructor(
    @Inject('USER_MODEL')
    private repo: ModelType<UserEntity>,
  ) {}

  public async create(user: User): Promise<void> {
    await this.repo.create({ ...user.props });
  }

  public async findAll(): Promise<User[]> {
    const userEntities = await this.repo.scan().exec();
    const users = userEntities.map((entity) => UserMapper.toDomain(entity));

    return users;
  }
}
