import { branca } from "../types/branca.type";

export class CreateAlbum {
  readonly id: string; 
  readonly name: string; 
  readonly branca: branca; 
  readonly data: Date; 
  readonly place: string; 
  readonly album_link: string;
  readonly album_cover: string;
}
