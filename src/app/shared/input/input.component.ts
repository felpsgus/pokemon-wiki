import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() value: string = '';
  @Input() error?: string;
  @Input() required: boolean = false;
  @Input() icon?: string;

  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  }
}
