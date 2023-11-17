import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album {
  @Prop({ required: true })
  _id: string;
  
  @Prop({ required: true })
  name: string; 
  
  @Prop({ required: true })
  branca: string; 
  
  @Prop({ required: true })
  data: string; 
  
  @Prop({ required: true })
  place: string; 
  
  @Prop({ required: true })
  album_link: string;
  
  @Prop({ required: true })
  album_cover: string;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
