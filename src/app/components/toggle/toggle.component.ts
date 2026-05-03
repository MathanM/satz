import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-toggle',
  imports: [
    FormsModule
  ],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent implements AfterViewInit {
  @Input({required: true}) selected!: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => this.el.nativeElement.classList.add('ready'), 0);
  }

  onChange(flag: boolean) {
    this.selectedChange.emit(flag);
  }
}
