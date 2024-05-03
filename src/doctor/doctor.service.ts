import { Injectable } from '@nestjs/common';
import { CreateDoctorDto, CreateProfileDoctor, UpdateDoctorDto } from './doctor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { doctor } from '@prisma/client';

@Injectable()
export class DoctorService {
  constructor(private readonly prisma: PrismaService) { }
  async create(Body: CreateDoctorDto): Promise<doctor> {
    return await this.prisma.doctor.create({ data: Body });
  }

  async findAll(): Promise<doctor[]> {
    return await this.prisma.doctor.findMany();
  }

  async findStatus(id: string, status: number) {
    const checkStatus = await this.prisma.doctor.findMany();
  }

  async statusAppoinment(id : string){
    return await this.prisma.appoinment.findUnique({
      where : {id},
    })
  }

  async findStatusActive():Promise <doctor[]> {
    const result = await this.prisma.doctor.findMany({
      where: {
        status: 1
      }
    });
    return result;
  }

  async creteProfile(body : CreateProfileDoctor):Promise <doctor>{
    const profile = await this.prisma.doctor.create({
      data : body
    })
    return profile;
  }

  async findOne(id: string): Promise < doctor > {
  return await this.prisma.doctor.findUnique({ where: { id } });
}

  async findUsername(username: string): Promise < doctor > {
  return await this.prisma.doctor.findUnique({ where: { username } });
}

  async update(id: string, body: UpdateDoctorDto): Promise < doctor > {
  return await this.prisma.doctor.update({ where: { id }, data: body });
}

  async remove(id: string): Promise < doctor > {
  return await this.prisma.doctor.delete({ where: { id } });
}

  //find by username
}
