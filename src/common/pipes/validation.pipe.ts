import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from "@nestjs/common";
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { v4 as generate_uuid } from "uuid";

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    value = {
      _id: generate_uuid(),
      ...value
    }

    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object, Date];
    return !types.includes(metatype);
  }
}
