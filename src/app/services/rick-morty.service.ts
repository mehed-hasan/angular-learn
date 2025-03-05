import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor() {}

  async getCharacters(page: number = 1): Promise<any> {
    const response = await fetch(`${this.apiUrl}?page=${page}`);
    return await response.json();
  }
}
