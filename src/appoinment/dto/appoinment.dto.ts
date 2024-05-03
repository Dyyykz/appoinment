import { OmitType } from "@nestjs/mapped-types";
import { AppoinmentEntity } from "../entities/appoinment.entity";
import { ApiProperty } from "@nestjs/swagger";

export class appoinmentDto extends OmitType(AppoinmentEntity,['id']){
    @ApiProperty()
    userId: string;
    @ApiProperty()
    doctorId: string;
    @ApiProperty()
    date: Date;
    createdAt: Date;
    updatedAt: Date;
}

