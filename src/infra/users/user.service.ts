import { Inject, Injectable } from '@nestjs/common';
import { ModelType } from 'dynamoose/dist/General';
import { User } from './user.entity';
import { randomUUID } from 'node:crypto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: ModelType<User>,
  ) {}

  public async create(email: string, password: string) {
    const hashedPassword = await hash(password, 10);

    const users = await this.userModel.create({
      userId: randomUUID(),
      email: email,
      password: hashedPassword,
    });
    return users;
  }

  public async index() {
    return this.userModel.scan().exec();
  }
}
