import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '../common/guards/auth.guard';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { TransformPipe } from '../common/pipes/transform.pipe';
import { User } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signIn(@Body(ValidationPipe) user: User) {
    return this.authService.signIn(user);
  }
  
  @UsePipes(TransformPipe)
  @Post('register')
  async register(@Body(ValidationPipe) user: User) {
    return this.authService.register(user); 
  }
  
  // TODO: add Role !!
  @UseGuards(AuthGuard)
  @Get('users')
  async findAll() {
    return this.authService.findAll();
  }

}
