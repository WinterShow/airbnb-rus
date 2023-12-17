import { Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  async register() {
    return this.authService.register();
  }

  @HttpCode(200)
  @Post('login')
  async login() {
    return this.authService.login();
  }
}
