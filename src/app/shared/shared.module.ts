import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent, CardComponent],
  imports: [CommonModule, RouterModule, FormsModule, MatIconModule],
  exports: [ButtonComponent, InputComponent, CardComponent],
})
export class SharedModule {}
