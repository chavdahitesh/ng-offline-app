import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-create-dialog',
  templateUrl: './mat-create-dialog.component.html',
  styleUrls: ['./mat-create-dialog.component.css'],
})
export class MatCreateDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onNoClick() {
    console.log('onNoClick clicked');
  }
}
