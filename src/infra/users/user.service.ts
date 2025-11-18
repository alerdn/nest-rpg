import { Inject, Injectable } from '@nestjs/common';
import { ModelType } from 'dynamoose/dist/General';
import { User } from './user.entity';
import { randomUUID } from 'node:crypto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: ModelType<User>,
  ) {}

  public async create() {
    const users = await this.userModel.create({
      id: randomUUID(),
      'inventory::armor': ['Fullplate'],
      'inventory::weapon': ['Longsword'],
    });
    return users;
  }

  public async addWeapon(id: string, weapon: string) {
    const user = await this.userModel.get(id);
    if (!user) {
      throw new Error('User not found');
    }

    user['inventory::weapon'].push(weapon);
    await user.save();

    return user;
  }

  public async index() {
    return this.userModel.scan().exec();
  }
}
