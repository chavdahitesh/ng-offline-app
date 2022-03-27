import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogComponent } from './components/mat-view-dialog/mat-dialog.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { MatDeleteDialogComponent } from './components/mat-delete-dialog/mat-delete-dialog.component';
import { MatCreateDialogComponent } from './components/mat-create-dialog/mat-create-dialog.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NotfoundComponent,
    MatDialogComponent,
    HomeComponent,
    MatDeleteDialogComponent,
    MatCreateDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
