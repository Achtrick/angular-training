import { Component, OnInit } from '@angular/core';
import { WishService } from 'src/app/wish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private wishService: WishService) {}

  ngOnInit(): void {}

  createNewWish() {
    this.wishService.createWish('testing').subscribe((res: any) => {
      console.log(res);
    });
  }
}
