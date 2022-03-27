import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatCreateDialogComponent } from 'src/app/components/mat-create-dialog/mat-create-dialog.component';
import { MatDeleteDialogComponent } from 'src/app/components/mat-delete-dialog/mat-delete-dialog.component';
import { MatDialogComponent } from 'src/app/components/mat-view-dialog/mat-dialog.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  animal: any;
  name: any;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openViewDialog() {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openDeleteDialog() {
    const dialogRef = this.dialog.open(MatDeleteDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openCreateDialog() {
    const dialogRef = this.dialog.open(MatCreateDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
