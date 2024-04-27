import { user } from "@prisma/client";

export class UserEntity implements user{
    id: string;
    name: string;
    username: string;
    password: string;
}
