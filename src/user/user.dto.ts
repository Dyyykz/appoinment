
import { UserEntity } from "./user.entity";
import { OmitType, PartialType } from "@nestjs/mapped-types"

export class RegisterDto extends OmitType(UserEntity, ['id']) {
    name: string;
    username: string;
    password: string;
}

export class LoginDto extends OmitType(UserEntity, ['id']) {
    username: string;
    password: string;
}

