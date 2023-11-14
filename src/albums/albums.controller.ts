import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbum } from './dto/create-album.dto';
import { Album } from './interfaces/album.interface';

@Controller('albums')
export class AlbumsController {
  
  constructor(private readonly albumService: AlbumsService) {}
  
  @Get()
  async findAll(): Promise<Album[]> {
    return this.albumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.albumService.findOne(id);
  }
  
  // TODO: trasformation pipe
  @Post()
  async create(@Body() album: CreateAlbum) {
    return this.albumService.create(album);
  }

  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.albumService.delete(id);
  }
}
