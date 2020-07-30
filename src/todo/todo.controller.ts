import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { InjectRepository, Repository } from 'nest-monk';
import { Todo } from './todo.model';

@Controller('todo')
export class TodoController {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {
  }

  @Get()
  async list() {
    return await this.todoRepository.list({});
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.todoRepository.getById(id);
  }

  @Post('')
  async add(@Body() todo: Todo) {
    return await this.todoRepository.add(todo);
  }

  @Put(':id')
  async edit(@Param('id') id: string, @Body() todo: Todo) {
    return await this.todoRepository.edit(id, todo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.todoRepository.delete(id);
  }
}
