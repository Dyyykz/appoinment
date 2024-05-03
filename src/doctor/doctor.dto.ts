import { OmitType, PartialType } from "@nestjs/mapped-types";
import { DoctorEntity } from "./entities/doctor.entity";

export class CreateDoctorDto extends OmitType(DoctorEntity,['id']){
    name: string;
    username: string;
    password: string;

    createdAt: Date;
    updatedAt: Date;
}


export class UpdateDoctorDto extends PartialType(CreateDoctorDto){
     username?: string;
     password?: string;
}

export class CreateProfileDoctor extends OmitType(DoctorEntity,['id']){
    phone: string;
    degree: string;
    desc: string;
    gender: string;
    createdAt: Date;
    updatedAt: Date;
}

