import { model } from 'dynamoose';
import { UserSchema } from './user.schema';
import { UserEntity } from './user.entity';

export const UserProvider = {
  provide: 'USER_MODEL',
  useFactory: () => model<UserEntity>('User', UserSchema),
};
