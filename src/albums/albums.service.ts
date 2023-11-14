import { Injectable } from '@nestjs/common';
import { Album } from './interfaces/album.interface';

@Injectable()
export class AlbumsService {
  private albums: Album[] = [];
  
  findAll(): Album[] {
    return this.albums; 
  }

  findOne(id: string): Album {
   return this.albums[0];
  }

  delete(id: string) {
    const index = this.albums.findIndex(x => x.id === id);
    if (index > -1) {
      return this.albums.splice(index, 1);
    } 
    return {};
  }
  
  // TODO: automatizzare: id
  create(album: Album): Album {
    this.albums.push(album);
    return album;
  }

}
