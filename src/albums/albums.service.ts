import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Album } from './schemas/album.schema';
import { Connection, Model } from 'mongoose';

@Injectable()
export class AlbumsService {

  constructor(
    @InjectModel(Album.name) private albumModel: Model<Album>,
    // @InjectConnection() private connection: Connection
  ) {}
  
  async findAll(): Promise<Album[]> {
    return this.albumModel.find();
  }

  async findOne(_id: string): Promise<Album | null> {
    return this.albumModel.findOne({ _id });
  }

  async delete(_id: string): Promise<Object> {
    return this.albumModel.deleteOne({ _id });
  }
  
  async create(album: Album): Promise<Album> {
    return this.albumModel.create(album);
  }

}
