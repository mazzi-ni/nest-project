import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbum } from './dto/create-album.dto';
import { Album } from './interfaces/album.interface';

@Controller('albums')
export class AlbumsController {
  
  constructor(private albumService: AlbumsService) {}
  
  @Get()
  async findAll(): Promise<Album[]> {
    return this.albumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albumService.findOne(id);
  }
  
  // TODO: validation pipe
  @Post()
  async create(@Body() album: CreateAlbum) {
    return this.albumService.create(album);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.albumService.delete(id);
  }
}
