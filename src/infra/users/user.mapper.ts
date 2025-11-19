import { User } from 'src/core/domain/user';
import { UserEntity } from './user.entity';

export class UserMapper {
  static toDomain(entity: UserEntity): User {
    return User.create({
      userId: entity.userId,
      email: entity.email,
      password: entity.password,
    });
  }
}
