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
}
