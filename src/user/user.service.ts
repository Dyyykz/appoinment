import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { user } from '@prisma/client';
import * as bcrypt from  'bcrypt';


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async createUser(body: CreateUserDto): Promise<user> {
    const hashPassword = await bcrypt.hash(body.password, 8);
    const user = await this.prisma.user.create({ data: { ...body, password : hashPassword} })
    return user
  }

  async findAll(): Promise<user[]> {
    return await this.prisma.user.findMany();
  }

  async findId(id: string): Promise<user> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async findUsername(username: string): Promise<user> {
    return await this.prisma.user.findUnique({ where: { username } });
  }

  async update(id: string, body: UpdateUserDto): Promise<user> {
    return await this.prisma.user.update({ where: { id }, data: body });
  }
  async remove(id: string): Promise<user> {
    return await this.prisma.user.delete({ where: { id } });
  }

  //find ByUsername
  async findByUserName(username: string): Promise<user> {
    const user = await this.findUsername(username);
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    return user;
  }

  


}
