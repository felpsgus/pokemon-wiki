import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './home.routing';
import { Home } from './home';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Home],
  imports: [CommonModule, AnimeRoutingModule, SharedModule, FormsModule],
  exports: [Home],
})
export class HomeModule {}
