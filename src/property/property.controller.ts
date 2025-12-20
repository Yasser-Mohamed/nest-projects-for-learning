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
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { Q } from 'node_modules/@faker-js/faker/dist/airline-DF6RqYmq';
import { PaginationDto } from './dto/pagination.dto';


@Controller('property')
export class PropertyController {
  
  constructor(private propertyService: PropertyService) {}

  @Get()
  findAll(@Query() PaginationDto: PaginationDto) {
    return this.propertyService.findAll(PaginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.propertyService.findOne(id);
  }

  @Post()
  createProperty(@Body() dto: CreatePropertyZodDto) {
    return this.propertyService.create(dto);
  }

  @Patch(':id')
  // @UsePipes(new ValidationPipe({ groups: ['update'] }))
  updateProperty(
    @Param('id', ParseIdPipe) id,
    @Body() body: UpdatePropertyDto,
  ) {
    return this.propertyService.update(id, body);
  }

  @Delete(':id')
  deleteProperty(@Param('id', ParseIntPipe) id: number) {
    return this.propertyService.delete(id);
  }
}
