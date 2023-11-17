import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Connection, Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    // @InjectConnection() private connection: Connection
  ) {}

  async findOne(email: string): Promise<User | null> {
    return this.userModel.where({ email }).findOne();
  }
  
  async create(user: User): Promise<User> {
    if(await this.findOne(user.email) !== null) {
      return null;
    }

    const saltOrRounds = 10;
    const hash_user: User = {
      _id: user._id,
      email: user.email,
      pass: await bcrypt.hash(user.pass, saltOrRounds),
    }
    return this.userModel.create(hash_user);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }
}
