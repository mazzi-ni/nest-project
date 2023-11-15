import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
  
  async create(user: User) {
    if(this.users.find(u => u.email === user.email)) {
      return ;
    }

    const saltOrRounds = 10;
    const hash_user: User = {
      _id: user._id,
      email: user.email,
      pass: await bcrypt.hash(user.pass, saltOrRounds),
    }
    this.users.push(hash_user);
  }

  async findAll(): Promise<User[] | undefined> {
    return this.users;
  }
}
