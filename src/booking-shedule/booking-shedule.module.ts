import { Module } from '@nestjs/common';
import { BookingSheduleController } from './booking-shedule.controller';
import { BookingSheduleService } from './booking-shedule.service';

@Module({
  controllers: [BookingSheduleController],
  providers: [BookingSheduleService],
})
export class BookingSheduleModule {}
