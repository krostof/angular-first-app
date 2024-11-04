import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {from, interval, of, Subscription, take} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  sub!: Subscription;
  obs$ = interval(1000);

  onClose() {
    this.close.emit()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
    console.log(this.sub)
  }

  ngOnInit(): void {
    // this.sub = of({name: 'test'}).subscribe(
    //   {
    //     next: value => console.log(value),
    //     error: err => console.log(err),
    //     complete: () => console.log('TEST')
    //   })

    this.sub = from([1,2,3]).subscribe(
      {
        next: value => console.log(value),
        error: err => console.log(err),
        complete: () => console.log('TEST')
      })

    // this.sub = interval(1000).pipe(take(5)).subscribe({
    //   next: number => console.log(number)
    // });
    console.log(this.sub)
  }
}
