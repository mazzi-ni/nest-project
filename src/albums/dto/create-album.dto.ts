import { IsString, IsInt, IsDate, IsIn } from 'class-validator';

export class CreateAlbum {
  
  @IsString()
  readonly id: string;
  
  @IsString()
  readonly name: string; 
  
  @IsIn(['EG', 'LC', 'RS', 'COCA'])
  readonly branca: string; 
  
  @IsDate()
  readonly data: Date; 
  
  @IsString()
  readonly place: string; 
  
  @IsString()
  readonly album_link: string;
  
  @IsString()
  readonly album_cover: string;
}
