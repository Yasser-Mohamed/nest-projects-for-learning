import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}
  transform(value: any, metadata: ArgumentMetadata) {
    const parsedVal = this.schema.safeParse(value);
    if (parsedVal.success) return parsedVal;
    throw new BadRequestException(parsedVal.error.format());
  }
}
