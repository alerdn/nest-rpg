import { User } from 'src/core/domain/user';
import { UserEntity } from './user.entity';

export class UserMapper {
  static toDomain(entity: UserEntity): User {
    return User.create({
      userId: entity.Item.userId,
      email: entity.Item.email,
      password: entity.Item.password,
    });
  }

  static toEntity(user: User): UserEntity {
    return new UserEntity(user.props);
  }
}
