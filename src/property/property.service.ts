import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDto } from './dto/pagination.dto';
import { DEFAULT_PAGE_LIMIT } from 'utils/constant';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
  ) {}
  async findAll(PaginationDto: PaginationDto) {
    return await this.propertyRepository.find({
      skip: PaginationDto.skip,
      take: PaginationDto.limit ?? DEFAULT_PAGE_LIMIT,
    });
  }
  async findOne(id: number) {
    const property = await this.propertyRepository.findOneBy({ id });
    if (!property) {
      throw new NotFoundException();
    }
    return property;
  }
  async create(dto: CreatePropertyDto) {
    return await this.propertyRepository.save(dto);
  }
  async update(id: number, dto: UpdatePropertyDto) {
    const property = await this.propertyRepository.preload({
      id,
      ...dto,
    });
    if (!property) {
      throw new NotFoundException();
    }
    return await this.propertyRepository.save(property);
  }
  async delete(id: number) {
    const property = await this.findOne(id);
    return await this.propertyRepository.remove(property);
  }
}
