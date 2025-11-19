import { UserSchema } from './user.schema';
import { User } from './user.entity';
import { model } from 'dynamoose';

export const UserProvider = {
  provide: 'USER_MODEL',
  useFactory: () => model<User>('User', UserSchema),
};
