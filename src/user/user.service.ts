import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { user } from '@prisma/client';
import * as bcrypt from  'bcrypt';


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }
  async createUser(body: CreateUserDto): Promise<user> {
    const usernameExist = await this.findUsername(body.username);
    const hashPassword = await bcrypt.hash(body.password, 8);
    const user = await this.prisma.user.create({ data: { ...body, password : hashPassword} })
    if (!user) throw new BadRequestException('Error creating the user');
    return user
  }

  async findAll(): Promise<user[]> {
    return await this.prisma.user.findMany();
  }

  async findId(id: string): Promise<user> {
    const findId =  await this.prisma.user.findUnique({ where: { id } })
    if(!findId) throw new  NotFoundException('User not found')
    return findId;
  }

  async findUsername(username: string): Promise<user> {
    const findUsername = await this.prisma.user.findUnique({ where: { username } });
    if (!findUsername) throw new  NotFoundException('User not Found with this username');
    return findUsername
  }

  async update(id: string, body: UpdateUserDto): Promise<user> {
    return await this.prisma.user.update({ where: { id }, data: body });
  }
  async remove(id: string): Promise<user> {
    return await this.prisma.user.delete({ where: { id } });
  }

  //find ByUsername
  // async findByUserName(username: string): Promise<user> {
  //   const user = await this.findUsername(username);
  //   if (!user) {
  //     throw new BadRequestException('Username already exixt');
  //   }
  //   return user;
  // }

  


}
