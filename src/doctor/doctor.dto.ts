import { OmitType, PartialType } from "@nestjs/mapped-types";
import { DoctorEntity } from "./entities/doctor.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateDoctorDto extends OmitType(DoctorEntity,['id']){
    @ApiProperty()
    name: string;
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;

    createdAt: Date;
    updatedAt: Date;
}


export class UpdateDoctorDto extends PartialType(CreateDoctorDto){
    @ApiProperty()
     username?: string;
     @ApiProperty()
     password?: string;
}

export class CreateProfileDoctor extends OmitType(DoctorEntity,['id']){
    @ApiProperty()
    phone: string;
    @ApiProperty()
    degree: string;
    @ApiProperty()
    desc: string;
    @ApiProperty()
    gender: string;
    
    createdAt: Date;
    updatedAt: Date;
}

