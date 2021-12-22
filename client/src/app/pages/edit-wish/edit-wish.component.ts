import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WishService } from 'src/app/wish.service';

@Component({
  selector: 'app-edit-wish',
  templateUrl: './edit-wish.component.html',
  styleUrls: ['./edit-wish.component.scss'],
})
export class EditWishComponent implements OnInit {
  text: any;
  _id: any;

  constructor(
    private wishService: WishService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.wishService.getWish(params.wishId).subscribe((wish: any) => {
        this.text = wish.text;
        this._id = params.wishId;
      });
    });
  }

  editWish(text: any) {
    this.wishService.editWish(this._id, text).subscribe((res: any) => {
      if (res.msg === 'ERROR') {
        alert('ERROR !');
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
