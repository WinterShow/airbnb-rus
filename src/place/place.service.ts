import { Injectable } from '@nestjs/common';

@Injectable()
export class PlaceService {
  async create() {
    return 'Создать новую карточку места';
  }

  async update() {
    return 'Обновить карточку места';
  }

  async delete() {
    return 'Удаляет карточку места';
  }

  async get() {
    return 'Получить все карточки мест';
  }
}
