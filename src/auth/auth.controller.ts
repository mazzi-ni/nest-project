import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signIn(
    @Body('email') email: string, 
    @Body('pass') pass: string
  ) {
    return this.authService.signIn(email, pass);
  }

  @Post('register')
  async register(
    @Body('email') email: string, 
    @Body('pass') pass: string
  ) {
    return this.authService.register(email, pass)  
  }

}
