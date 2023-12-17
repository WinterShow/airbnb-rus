import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingSheduleService {
  async create() {
    return 'Создать новый период бронирования места';
  }

  async update() {
    return 'Обновить период бронирования места';
  }

  async delete() {
    return 'Удаляет период бронирования места';
  }

  async get() {
    return 'Получить все периоды бронирования мест';
  }
}
