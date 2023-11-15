import { IsEmail, IsString, IsUUID } from "class-validator";

export class CreateUser {
  @IsUUID()
  _id: string;

  @IsEmail()
  email: string;
  
  @IsString()
  pass: string;
}
