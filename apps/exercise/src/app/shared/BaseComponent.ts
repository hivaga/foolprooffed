import { Component, EventEmitter, OnDestroy } from "@angular/core";

@Component({
  template: ""
})
export abstract class BaseComponent implements OnDestroy {

  readonly isDestroyed = new EventEmitter<void>();


  ngOnDestroy() {
    this.isDestroyed.next();
    this.isDestroyed.complete();
  }

}
