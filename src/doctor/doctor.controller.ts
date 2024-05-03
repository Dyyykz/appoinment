import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto, UpdateDoctorDto } from './doctor.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Doctor')
@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post('create-doctor')
  async create(@Body(ValidationPipe) Body: CreateDoctorDto) {
    const doctor = await this.doctorService.create(Body);
    return{
      data : doctor,
      message : 'success',
      statusCode : 201
    }
  }

  @Post('create-Profile')
  async profile(@Body(ValidationPipe) Body :CreateDoctorDto){
    const profile = await this.doctorService.creteProfile(Body)
    return{
      data : profile,
      message : 'success',
      statusCode : 201
    }
  }

  @Get()
  async findAll() {
    const findMany = await this.doctorService.findAll();
    return {
      data : findMany,
      message : 'success' ,
      statusCode : 200
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const findId= await this.doctorService.findOne(id);
    return {
      data : findId,
      message : 'success' ,
      statusCode : 200
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() Body: UpdateDoctorDto) {
    const updateDoctor= await this.doctorService.update(id, Body);
    return{
      data : updateDoctor,
      mesage : 'success',
      statusCode : 200
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deleteDoctor = await this.doctorService.remove(id);
    return{
      data : deleteDoctor,
      message: 'delete success',
      statusCode : 204
    }
  }
}
