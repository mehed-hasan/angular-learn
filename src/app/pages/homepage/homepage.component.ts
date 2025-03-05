import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { CardComponent } from '../../components/shared/card/card.component';
import { ModalComponent } from '../../components/shared/modal/modal.component';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ButtonModule,
    PaginatorModule,
    ModalComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  characters: any[] = [];
  totalRecords: number = 0;
  rows: number = 10;
  showModal: boolean = false;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.loadCharacters(1);
  }

  async loadCharacters(page: number): Promise<void> {
    const data = await this.rickMortyService.getCharacters(page);
    this.characters = data.results;
    this.totalRecords = data.info.count;
  }

  onPageChange(event: any): void {
    this.loadCharacters(event.page + 1);
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
