import {
  Body,
  Controller, Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import type { User } from '../type/usersType';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  @HttpCode(200)
  findAll() {
    return this.usersService.findAll();
  }
  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string): User {
    return this.usersService.findOne(+id);
  }
  @Post()
  @HttpCode(201)
  create(@Body() user: User): User {
    return this.usersService.create(user);
  }
  @Patch(':id')
  @HttpCode(200)
  update(@Param('id') id: string, @Body() user: User): User {
    return this.usersService.update(+id, user) as User;
  }
  @Delete(':id')
  @HttpCode(200)
  delete(@Param('id') id: string): string {
    this.usersService.delete(+id);
    return `User with id ${id} has been deleted`;
  }
}
