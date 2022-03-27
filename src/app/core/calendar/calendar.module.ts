import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';

import { MaterialModule } from 'src/app/material/material.module';
@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, CalendarRoutingModule, MaterialModule],
})
export class CalendarModule {}
