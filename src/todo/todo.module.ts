import { Module } from '@nestjs/common';
import { MonkModule } from 'nest-monk';
import { Todo } from './todo.model';
import { TodoController } from './todo.controller';

@Module({
  imports: [MonkModule.forFeatures([Todo])],
  controllers: [TodoController],
})
export class TodoModule {}
