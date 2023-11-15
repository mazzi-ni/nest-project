import { Injectable } from '@nestjs/common';
import { Album } from './interfaces/album.interface';

@Injectable()
export class AlbumsService {
  private albums: Album[] = [];
  
  findAll(): Album[] {
    return this.albums; 
  }

  findOne(id: string): Album | null {
    return this.albums.find(album => album._id === id);
  }

  delete(id: string): Album[] | null {
    const index = this.albums.findIndex(x => x._id === id);
    if (index > -1) {
      return this.albums.splice(index, 1);
    } 
    return null;
  }
  
  create(album: Album): Album {
    this.albums.push(album);
    return album;
  }

}
