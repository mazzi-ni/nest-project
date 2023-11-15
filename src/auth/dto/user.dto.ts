import { IsEmail, IsString, IsUUID, IsOptional } from "class-validator";

export class User {
  @IsOptional()
  @IsUUID()
  _id: string;

  @IsEmail()
  email: string;

  @IsString()
  pass: string;
}
