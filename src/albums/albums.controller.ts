import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbum } from './dto/create-album.dto';
import { Album } from './interfaces/album.interface';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { AuthGuard } from '../common/guards/auth.guard';


@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumService: AlbumsService) {}
  
  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<Album[]> {
    return this.albumService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.albumService.findOne(id);
  }
  
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body(new ValidationPipe) album: CreateAlbum) {
    return this.albumService.create(album);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.albumService.delete(id);
  }
}
