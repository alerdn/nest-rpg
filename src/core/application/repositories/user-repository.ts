import { User } from 'src/core/domain/user';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findAll(): Promise<User[]>;
  abstract findByEmail(email: string): Promise<User | null>;
}
