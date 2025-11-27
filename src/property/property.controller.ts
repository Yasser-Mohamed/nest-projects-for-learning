import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { ZodValidationPipe } from './pipes/zodValidationPip';
import { createPropertySchema } from './dto/createPropertyZod.dto';
import type { CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';


@Controller('property')
export class PropertyController {
  
  constructor(private propertyService: PropertyService) {}

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':at/:id')
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    return this.propertyService.findOne();
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createPropertySchema))
  createProperty(@Body() body: CreatePropertyZodDto) {
    return this.propertyService.create();
  }

  @Patch(':id')
  // @UsePipes(new ValidationPipe({ groups: ['update'] }))
  updateProperty(
    @Param('id', ParseIdPipe) id,
    @Body() body: CreatePropertyDto,
    @RequestHeader(HeadersDto) headers: HeadersDto,
  ) {
    return this.propertyService.update();
  }

  @Delete(':id')
  deleteProperty(@Param('id') id: string) {
    return this.propertyService.delete();
  }
}
