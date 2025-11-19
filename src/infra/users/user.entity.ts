import { Item } from 'dynamoose/dist/Item';
import { UserProps } from 'src/core/domain/user';

export class UserEntity extends Item implements UserProps {
  userId: string;
  email: string;
  password: string;
}
