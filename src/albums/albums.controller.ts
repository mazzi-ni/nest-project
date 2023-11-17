import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, UseGuards, UsePipes } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbum } from './dto/create-album.dto';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { TransformPipe } from '../common/pipes/transform.pipe';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumService: AlbumsService) {}
  
  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return this.albumService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.albumService.findOne(id);
  }
  
  @UsePipes(TransformPipe)
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body(ValidationPipe) album: CreateAlbum) {
    return this.albumService.create(album);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.albumService.delete(id);
  }
}
