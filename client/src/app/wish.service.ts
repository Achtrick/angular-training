import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  constructor(private webRequestService: WebRequestService) {}

  createWish(text: string) {
    return this.webRequestService.post('createWish', { text });
  }

  getWishList() {
    return this.webRequestService.get('WishList');
  }

  getWish(_id: any) {
    return this.webRequestService.post('Wish', { _id });
  }

  editWish(_id: any, text: string) {
    return this.webRequestService.put('editWish', { _id, text });
  }

  deleteWish(_id: any) {
    return this.webRequestService.post('deleteWish', { _id });
  }
}
