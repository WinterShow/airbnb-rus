import { Controller, Delete, Get, Post } from '@nestjs/common';
import { PlaceService } from './place.service';

@Controller('room')
export class PlaceController {
  constructor(private placeService: PlaceService) {}
  @Get('get')
  async get() {
    return this.placeService.get();
  }
  @Post('create')
  async create() {
    return this.placeService.create();
  }
  @Post('update')
  async update() {
    return this.placeService.update();
  }
  @Delete('delete')
  async delete() {
    return this.placeService.delete();
  }
}
