import { appoinment, doctor, user } from "@prisma/client";
import { AppoinmentEntity } from "src/appoinment/entities/appoinment.entity";

export interface UserInterface {
    data: user,
    message: string,
    statusCode: number
  }
export interface DoctorInterface {
    data: doctor,
    message: string,
    statusCode: number
  }
export interface AppoinmentInterface {
    data: AppoinmentEntity,
    message: string,
    statusCode: number
  }

  