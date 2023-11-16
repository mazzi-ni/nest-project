import { Injectable, Logger, PipeTransform } from "@nestjs/common";
import { v4 as generate_uuid } from "uuid";

@Injectable()
export class TransformPipe implements PipeTransform {
  private readonly logger = new Logger(TransformPipe.name);
  async transform(value: any) {
    const _id = generate_uuid();
    this.logger.log(`add _id: ${_id}`);
    return {
      _id,
      ...value
    }
  }
}
