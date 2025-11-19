import { hash } from 'bcrypt';
import { UserRepository } from '../repositories/user-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { User } from 'src/core/domain/user';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  public async create(email: string, password: string) {
    const hashedPassword = await hash(password, 10);

    const user = User.create({
      userId: randomUUID(),
      email: email,
      password: hashedPassword,
    });

    await this.userRepository.create(user);

    return user;
  }

  public async index() {
    return this.userRepository.findAll();
  }
}
