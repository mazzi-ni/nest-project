import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import { v4 } from 'uuid';
import { CreateUser } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users: CreateUser[] = [
    {
      _id: v4(),
      email: "andre.mazzq@gmail.com",
      pass: "sas!1234",
    }
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async create(email: string, pass: string) {
    const saltOrRounds = 10;
    const hash_user: CreateUser = {
      _id: v4(),
      email: email,
      pass: await bcrypt.hash(pass, saltOrRounds),
    }
    return this.users.push(hash_user);
  }

}
