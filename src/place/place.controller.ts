import { Controller, Delete, Get, Post } from '@nestjs/common';
import { PlaceService } from './place.service';

@Controller('room')
export class PlaceController {
  constructor(private roomService: PlaceService) {}
  @Get('get')
  async get() {
    return this.roomService.get();
  }
  @Post('create')
  async create() {
    return this.roomService.create();
  }
  @Post('update')
  async update() {
    return this.roomService.update();
  }
  @Delete('delete')
  async delete() {
    return this.roomService.delete();
  }
}
