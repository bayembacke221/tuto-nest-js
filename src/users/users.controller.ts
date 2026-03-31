import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
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
  findOne(@Param('id', ParseIntPipe) id: number): User {
    return this.usersService.findOne(id);
  }
  @Post()
  @HttpCode(201)
  create(@Body() user: User): User {
    return this.usersService.create(user);
  }
  @Patch(':id')
  @HttpCode(200)
  update(@Param('id', ParseIntPipe) id: number, @Body() user: User): User {
    return this.usersService.update(id, user) as User;
  }
  @Delete(':id')
  @HttpCode(200)
  delete(@Param('id') id: string): string {
    this.usersService.delete(+id);
    return `User with id ${id} has been deleted`;
  }
  @Get()
  @HttpCode(200)
  findAllWithQuery(
    @Query('page') page?: string,
    @Query('size') size?: string,
    @Query('search') search?: string,
  ): string {
    return `Page: ${page}, Size: ${size}, Search: ${search}`;
  }
}
