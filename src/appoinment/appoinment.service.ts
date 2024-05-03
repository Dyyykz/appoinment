import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { appoinmentDto } from './dto/appoinment.dto';
import { UserService } from 'src/user/user.service';
import { DoctorService } from 'src/doctor/doctor.service';
import { appoinment } from '@prisma/client';

@Injectable()
export class AppoinmentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userServices: UserService,
    private readonly doctorServices: DoctorService
  ) { }


  async createApppoinment(body: appoinmentDto): Promise<appoinment> {
    const doctor = await this.doctorServices.findOne(body.doctorId)
    if (!doctor) {
      throw new NotFoundException('Id Doctor not found')
    }
    const checkAppoinment = await this.checkAppoinment(body.doctorId, body.date)
    if (!checkAppoinment) {
      throw new NotFoundException('This date is already booked');
    }
    const result = await this.prisma.appoinment.create({
      data: body
    })
    return result;
  }

  async updateAppoinment(id: string,body: appoinmentDto){
    const doctor = await this.doctorServices.findOne(body.doctorId)
    if (!doctor) {
      throw new NotFoundException('Id Doctor not found')
    }
    const checkAppoinment = await this.checkAppoinment(body.doctorId, body.date)
    if (!checkAppoinment) {
      throw new NotFoundException('This date is already booked');
    }
    const updateAppoinment = await this.prisma.appoinment.update
    ({ 
      where : {id}, data : body}
    )
    return updateAppoinment;
  }


  async findAppoinmentById(id : string): Promise<appoinment>{
    const appoinment = await this.prisma.appoinment.findUnique({ where : {id}})
    if (appoinment){
      throw new NotFoundException('Not Found Appoinment')
    }
    return appoinment
  }

  async cancelAppoinment(id : string): Promise<appoinment>{
    const findAppoinment = await this.findAppoinmentById(id);
    if(!findAppoinment){
      throw new NotFoundException('Appoinment not Found');
    }
    const removeAppoinment = await this.remove(id);
    return removeAppoinment
  }


  // async acceptAppoinment(id : string,): Promise<appoinment>{
  //   const acceptAppoinment =  await this.findAppoinmentById(id);
  //   if(!acceptAppoinment){
  //     throw new NotFoundException('Appoinment Not Found')
  //   }

  //   const appoinmentdate = new Date(acceptAppoinment.date);
  //   const nowDate = new Date(Date.now());
  //   if(appoinmentdate < nowDate){
  //     throw new ForbiddenException('Appoinment Not Valid');
  //   }

  //   await this.prisma.appoinment.update({
  //     where :{id},
  //     data : {status : 'Accept'}
  //   })

  //   return acceptAppoinment
  // }



  async checkAppoinment(doctorId: string, date: Date): Promise<Boolean> {
    const checkAppoinment = await this.prisma.appoinment.findFirst({
      // check  doctor and date 
      where: { doctorId, AND: { date } },
    })
    return checkAppoinment ? true : false
  }

  async findAllStatus(doctor_id: string,) {
    return `This action returns all appoinment`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} appoinment`;
  }

  // update(id: number, updateAppoinmentDto: UpdateAppoinmentDto) {
  //   return `This action updates a #${id} appoinment`;
  // }

  async remove(id: string):Promise <appoinment>{
    const removeAppoinment = await this.prisma.appoinment.delete({where : {id}});
    return removeAppoinment;
  }
}
