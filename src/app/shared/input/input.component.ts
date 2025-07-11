import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  standalone: false,
})
export class InputComponent {
  @Input() label?: string;
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() disabled: boolean = false;
  @Input() class: string = '';
  @Input() value: string = '';
  @Input() onChange: (event: Event) => void = () => {};
  @Input() error?: string;
  @Input() required: boolean = false;
  @Input() icon?: string;
}
