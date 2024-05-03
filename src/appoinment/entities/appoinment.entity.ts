import { appoinment } from "@prisma/client";

export class AppoinmentEntity implements appoinment {
    id: string;
    date: Date;
    status: string;
    userId: string;
    doctorId: string;

    createdAt: Date;
    updatedAt: Date;
}
