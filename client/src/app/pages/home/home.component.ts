import { Component, OnInit } from '@angular/core';
import { WishService } from 'src/app/wish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  wishList: any;

  constructor(private wishService: WishService) {}

  ngOnInit() {
    this.wishService.getWishList().subscribe((wishList: any) => {
      this.wishList = wishList;
    });
  }

  createNewWish(text: string) {
    this.wishService.createWish(text).subscribe((res: any) => {
      if (res === 'ERROR') {
        alert('ERROR !');
      } else {
        this.wishList.push(res);
      }
    });
  }
}
