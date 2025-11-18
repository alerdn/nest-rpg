import { UserSchema } from './user.schema';
import { User } from './user.entity';
import * as dynamoose from 'dynamoose';

export const userProvider = {
  provide: 'USER_MODEL',
  useFactory: () => dynamoose.model<User>('User', UserSchema),
};
