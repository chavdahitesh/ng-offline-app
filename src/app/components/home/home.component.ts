import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MainService } from 'src/app/shared/services/main-service/main.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private mainService: MainService) {}
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.getPostList();
  }

  getPostList() {
    this.mainService
      .getPosts()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res) => {
          console.log('ress::', res);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  ngOnDestroy() {
    this.destroy$.complete();
  }
}
