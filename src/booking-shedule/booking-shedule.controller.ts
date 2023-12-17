import { Controller, Delete, Get, Post } from '@nestjs/common';
import { BookingSheduleService } from './booking-shedule.service';

@Controller('booking-shedule')
export class BookingSheduleController {
  constructor(private bookingSheduleService: BookingSheduleService) {}
  @Get('get')
  async get() {
    return this.bookingSheduleService.get();
  }
  @Post('create')
  async create() {
    return this.bookingSheduleService.create();
  }
  @Post('update')
  async update() {
    return this.bookingSheduleService.update();
  }
  @Delete('delete')
  async delete() {
    return this.bookingSheduleService.delete();
  }
}
