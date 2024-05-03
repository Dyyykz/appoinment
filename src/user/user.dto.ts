
import { ApiProperty } from "@nestjs/swagger";
import { UserEntity } from "./user.entity";
import { OmitType, PartialType } from "@nestjs/mapped-types"

export class CreateUserDto extends OmitType(UserEntity, ['id', ]) {
    @ApiProperty()
    name: string;
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}

export class CreateProfileUser extends PartialType(CreateUserDto) {
    @ApiProperty()
    phone?: string;
    @ApiProperty()
    gender?: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    name?: string;
    @ApiProperty()
    username?: string;
    @ApiProperty()
    password?: string;
}

export class LoginDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    username?: string;
    @ApiProperty()
    password?: string;
}

