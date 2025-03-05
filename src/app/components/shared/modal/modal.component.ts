import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  imports: [CardComponent, CommonModule],
})
export class ModalComponent {
  @Input() showModal: boolean = false;
  @Output() closeModalAction = new EventEmitter<void>();

  constructor() {
    console.log(this.showModal);
  }

  closeModal() {
    this.closeModalAction.emit();
    console.log(this.showModal);
  }
}
