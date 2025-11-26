import { UserProps } from 'src/core/domain/user';

export class UserEntity {
  TableName: string;
  Item: {
    userId: string;
    email: string;
    password: string;
  };

  constructor(props: UserProps) {
    this.TableName = 'User';
    this.Item = {
      userId: props.userId,
      email: props.email,
      password: props.password,
    };
  }
}
