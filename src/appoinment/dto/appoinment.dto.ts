import { OmitType } from "@nestjs/mapped-types";
import { AppoinmentEntity } from "../entities/appoinment.entity";

export class appoinmentDto extends OmitType(AppoinmentEntity,['id']){
    userId: string;
    doctorId: string;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
}

