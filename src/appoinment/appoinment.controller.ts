import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { AppoinmentService } from './appoinment.service';
import { appoinmentDto } from './dto/appoinment.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppoinmentInterface } from 'src/interface/response';

@ApiTags('appoinment')
@Controller('appoinment')
export class AppoinmentController {
  constructor(private readonly appoinmentService: AppoinmentService) { }

  @Get('find/:id')
  async findAppoinmentById(@Param(':id', ValidationPipe) id: string): Promise<AppoinmentInterface> {
    const findId = await this.appoinmentService.findAppoinmentById(id);
    return {
      data: findId,
      message: "",
      statusCode: 201
    }
  }

  @Post('create')
  @ApiOperation({})
  @ApiResponse({})
  @ApiBody({ 
    type: appoinmentDto,
    description: "",
  })
  async createAppoinment(@Body(ValidationPipe) data: appoinmentDto): Promise<AppoinmentInterface> {
    const create = await this.appoinmentService.createApppoinment(data);
    return { message: 'success', statusCode: 201, data: create };
  }

  // async findAppoinmentById(@Param() id : string): Promise<AppoinmentInterface>{
  //   const findId =  

  

  async cancelAppoinment(@Param(ValidationPipe) id: string): Promise<AppoinmentInterface> {
    const cancelAppoinment = await this.appoinmentService.cancelAppoinment(id);
    return { data: cancelAppoinment, message: 'success', statusCode: 200 }
  }

}
