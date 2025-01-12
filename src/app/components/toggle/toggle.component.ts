import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-toggle',
  imports: [
    FormsModule
  ],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {
  @Input({required: true}) selected!: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  onChange(flag: boolean) {
    this.selectedChange.emit(flag);
  }
}
