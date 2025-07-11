import { Component, Input } from '@angular/core';
import { Pokemon } from '../../model/pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: false,
})
export class CardComponent {
  @Input() pokemon: Pokemon | null = null;
}
