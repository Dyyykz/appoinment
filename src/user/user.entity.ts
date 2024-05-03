import { $Enums, user} from "@prisma/client";

export class UserEntity implements user{
    id: string;
    name: string;
    phone: string;
    gender: string;
   username: string;
    password: string;
    role: $Enums.Role;
    refreshToken: string;
    createdAt: Date;
    updatedAt: Date;
}
