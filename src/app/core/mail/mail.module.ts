import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [MailComponent],
  imports: [CommonModule, MailRoutingModule, MaterialModule],
})
export class MailModule {}
