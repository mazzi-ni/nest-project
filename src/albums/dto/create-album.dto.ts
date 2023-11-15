import { IsString, IsInt, IsDate, IsIn, IsUrl, IsUUID } from 'class-validator';

export class CreateAlbum {
  
  @IsUUID()
  readonly _id: string;
  
  @IsString()
  readonly name: string; 
  
  @IsIn(['EG', 'LC', 'RS', 'COCA'])
  readonly branca: string; 
  
  @IsString()
  readonly data: string; 
  
  @IsString()
  readonly place: string; 
  
  @IsUrl()
  readonly album_link: string;
  
  @IsUrl()
  readonly album_cover: string;
}
