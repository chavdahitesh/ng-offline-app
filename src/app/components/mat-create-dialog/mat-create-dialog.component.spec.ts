import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCreateDialogComponent } from './mat-create-dialog.component';

describe('MatCreateDialogComponent', () => {
  let component: MatCreateDialogComponent;
  let fixture: ComponentFixture<MatCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatCreateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
