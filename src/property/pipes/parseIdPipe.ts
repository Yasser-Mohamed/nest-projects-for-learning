import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class ParseIdPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const id = parseInt(value, 10);
    if (isNaN(id)) {
      throw new BadRequestException('ID must be an integer');
    }
    if (id <= 0) {
      throw new BadRequestException('ID must be a positive integer');
    }
    return id;
  }
}