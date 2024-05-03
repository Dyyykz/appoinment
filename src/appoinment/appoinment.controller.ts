import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppoinmentService } from './appoinment.service';
import { appoinmentDto } from './dto/appoinment.dto';
import { ApiTags } from '@nestjs/swagger';
import { AppoinmentInterface } from 'src/interface/response';

@ApiTags('appoinment')
@Controller('appoinment')
export class AppoinmentController {
  constructor(private readonly appoinmentService: AppoinmentService) { }

  @Get('find/:id')
  async findAppoinmentById(@Param(':id') id: string): Promise<AppoinmentInterface> {
    const findId = await this.appoinmentService.findAppoinmentById(id);
    return {
      data: findId,
      message: "",
      statusCode: 201
    }
  }

  



  @Post('create')
  async createAppoinment(@Body() data: appoinmentDto) {
    const create = await this.appoinmentService.createApppoinment(data);
    return { message: 'success', statusCode: 201, data: create };
  }


}
