import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: false,
})
export class ButtonComponent {
  @Input() placeholder: string = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled: boolean = false;
  @Input() class: string = '';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() onClick: (event: MouseEvent) => void = () => {};

  get isPrimary(): boolean {
    return this.variant === 'primary';
  }

  get isSecondary(): boolean {
    return this.variant === 'secondary';
  }
}
