import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(userDto: User) {
    const user = await this.usersService.findOne(userDto.email);
    if(!user?.pass) {
      throw new UnauthorizedException();
    }

    if(!await bcrypt.compare(userDto.pass, user.pass)) {  
      throw new UnauthorizedException();
    }
     
    const payload = { _id: userDto._id, email: userDto.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };    
  }

  async register(userDto: User) {
    await this.usersService.create(userDto);
    return await this.signIn(userDto);
  }

  async findAll() {
    return this.usersService.findAll();
  }
}

