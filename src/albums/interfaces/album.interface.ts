import { branca } from "../types/branca.type";

export interface Album {
  id: string;
  name: string; 
  branca: branca; 
  data: Date; 
  place: string; 
  album_link: string;
  album_cover: string;
}
