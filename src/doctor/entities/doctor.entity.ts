import { doctor } from "@prisma/client";

export class DoctorEntity implements doctor{
    id: string;
    name: string;
    gender: string;
    degree: string;
    desc: string;
    phone: string;
    status: number;
    username: string;
    password: string;

    createdAt: Date;
    updatedAt: Date;

}
