import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MonkModule } from 'nest-monk';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
  imports: [MonkModule.forFeatures([User])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
