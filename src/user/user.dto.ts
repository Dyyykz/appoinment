
import { ApiProperty } from "@nestjs/swagger";
import { UserEntity } from "./user.entity";
import { OmitType, PartialType } from "@nestjs/mapped-types"
import { IsNotEmpty, IsString, isNotEmpty, isString } from 'class-validator'

export class CreateUserDto extends OmitType(UserEntity, ['id',]) {
    @ApiProperty()
    @IsNotEmpty({ message: "Name must be not empty" })
    @IsString({ message: "Name must be a string" })
    name: string;

    @ApiProperty()
    @IsNotEmpty({ message: "Name must be not empty" })
    @IsString({ message: "Name must be a string" })
    username: string;

    @ApiProperty()
    @IsNotEmpty({ message: "Name must be not empty" })
    @IsString({ message: "Name must be a string" })
    password: string;
}

export class CreateProfileUser extends PartialType(CreateUserDto) {
    @ApiProperty()
    @IsNotEmpty({ message: "No Phone must be not empty" })
    @IsString({ message: "No Phone must be a string" })
    phone?: string;
    @ApiProperty()
    @IsNotEmpty({ message: "Gender must be not empty" })
    @IsString({ message: "Gender must be a string" })
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

export class credentialDto extends PartialType(CreateUserDto) {
    @ApiProperty()

    username?: string;
    @ApiProperty()
    password?: string;
}

