import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {
  }

  @Get()
  async get(@Query('email') email: string) {
    if (email?.length > 0) {
      return await this.userService.getByEmail(email);
    }

    return await this.userService.list();
  }
}
