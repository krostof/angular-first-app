import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {of, Subscription} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  sub!: Subscription

  onClose() {
    this.close.emit()
  }

  ngOnDestroy(): void {
    console.log(this.sub)
  }

  ngOnInit(): void {
    this.sub = of({name: 'test'}).subscribe(
      {
        next: value => console.log(value),
        error: err => console.log(err),
        complete: () => console.log('TEST')
      })
    console.log(this.sub)
  }
}
