import { Module } from '@nestjs/common';
import { RoomModule } from './place/place.module';
import { BookingSheduleModule } from './booking-shedule/booking-shedule.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [RoomModule, BookingSheduleModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
