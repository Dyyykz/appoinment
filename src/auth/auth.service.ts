import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma : PrismaService,
        private readonly userService : UserService
    ){}
    async register(body : CreateUserDto){
       await this.userService.createUser(body);
        
    }
}
