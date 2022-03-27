import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'mail',
    loadChildren: () =>
      import('./core/mail/mail.module').then((m) => m.MailModule),
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./core/calendar/calendar.module').then((m) => m.CalendarModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./core/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
1;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
