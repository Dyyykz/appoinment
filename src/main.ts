import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './interface/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const document = new DocumentBuilder()
    .setTitle("Appoinment ")
    .setDescription("The Inventory API Appoinment description")
    .setVersion("1.0")
    .build();

  const writerDescriptorDocument = SwaggerModule.createDocument(app, document);
  SwaggerModule.setup("api/inventory", app, writerDescriptorDocument);
  app.useGlobalPipes(new ValidationPipe())
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);

}
bootstrap();
