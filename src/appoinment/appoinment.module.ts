import { Module } from '@nestjs/common';
import { AppoinmentService } from './appoinment.service';
import { AppoinmentController } from './appoinment.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { DoctorService } from 'src/doctor/doctor.service';

@Module({
  controllers: [AppoinmentController],
  providers: [
    AppoinmentService,
    PrismaService,
    UserService,
    DoctorService

  ],
})
export class AppoinmentModule {}
