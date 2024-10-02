import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private scrollStories = new Subject<void>();
  private scrollLatest = new Subject<void>();
  private scrollFrontend = new Subject<void>();
  private scrollBackend = new Subject<void>();
  private scrollFullstack = new Subject<void>();

  scrollStoriesCalled$ = this.scrollStories.asObservable();
  scrollLatestCalled$ = this.scrollLatest.asObservable();
  scrollFrontendCalled$ = this.scrollFrontend.asObservable();
  scrollBackendCalled$ = this.scrollBackend.asObservable();
  scrollFullstackCalled$ = this.scrollFullstack.asObservable();

  triggerScrollStories(): void {
    this.scrollStories.next();
  }

  triggerScrollLatest(): void {
    this.scrollLatest.next();
  }

  triggerScrollFrontend(): void {
    this.scrollFrontend.next();
  }

  triggerScrollBackend(): void {
    this.scrollBackend.next();
  }

  triggerScrollFullstack(): void {
    this.scrollFullstack.next();
  }

}
