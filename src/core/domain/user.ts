export interface UserProps {
  userId: string;
  email: string;
  password: string;
}

export class User {
  private constructor(public props: UserProps) {}

  static create(props: UserProps): User {
    return new User(props);
  }

  get userId(): string {
    return this.props.userId;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }
}
