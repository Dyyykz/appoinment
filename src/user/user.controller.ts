import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { ApiTags } from '@nestjs/swagger';
import { user } from '@prisma/client';
import { appendFile } from 'fs';
import { UserInterface } from 'src/interface/response';


@ApiTags("User")
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  //Get
 
  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    return {
      data: users,
      message: "success find all",
      statusCode: 200,
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findId(id);
    return {
      data: user,
      message: 'Success get detail',
      statusCode: 200,
    }
  }

  // @Post('/create')
  // async create(@Body(ValidationPipe) body: CreateUserDto): Promise<UserInterface> {
  //   const User = await this.userService.createUser(body);
  //   return {
  //     data: User,
  //     message: 'Create Successfully',
  //     statusCode: 201
  //   }
  // }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    const user = this.userService.update(id, body);
    return {
      data: user,
      message: 'Update Successfully',
      statusCode: 200
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }


}
