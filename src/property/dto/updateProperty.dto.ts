import { PartialType } from '@nestjs/mapped-types';
import { CreatePropertyDto } from './createProperty.dto';

export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {
  name?: string;
  description?: string;
  price?: number;
}
