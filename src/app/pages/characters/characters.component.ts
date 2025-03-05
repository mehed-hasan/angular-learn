import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../components/shared/card/card.component';
import { ModalComponent } from '../../components/shared/modal/modal.component';
import { SidebarComponent } from '../../components/shared/sidebar/sidebar.component';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-characters',
  imports: [CardComponent, CommonModule, SidebarComponent, ModalComponent],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent {
  characters: any[] = [];
  totalRecords: number = 0;
  rows: number = 10;
  showModal = false;
  constructor(private rickMortyService: RickMortyService) {}
  ngOnInit(): void {
    this.rickMortyService.getCharacters(1).then((data) => {
      this.characters = data.results;
      this.totalRecords = data.info.count;
    });
  }

  openModal(): void {
    this.showModal = true;
  }
  closeModal(): void {
    this.showModal = false;
  }
}
