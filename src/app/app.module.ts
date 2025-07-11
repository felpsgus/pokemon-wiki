import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [RouterOutlet, CommonModule, SharedModule],
  exports: [RouterOutlet, SharedModule],
})
export class AppModule {}
