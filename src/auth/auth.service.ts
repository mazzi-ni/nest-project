import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(mail, pass) {
    const user = await this.usersService.findOne(mail);
   
    if(!await bcrypt.compare(pass, user.pass)) {  
      throw new UnauthorizedException();
    }
     
    const payload = { sub: user._id, mail: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };    
  }

  async register(mail, pass) {
    await this.usersService.create(mail, pass);
    return await this.signIn(mail, pass);
  }
}

