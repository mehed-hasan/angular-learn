import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() character: any;
  @Output() handleShowModal = new EventEmitter<void>();

  triggerOpenModal(): void {
    this.handleShowModal.emit();
  }
}
