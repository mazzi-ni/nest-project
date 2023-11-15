import { Injectable, PipeTransform } from "@nestjs/common";
import { v4 as generate_uuid } from "uuid";

@Injectable()
export class TransformPipe implements PipeTransform {
  async transform(value: any) {
    return {
      _id: generate_uuid(),
      ...value
    }
  }
}
