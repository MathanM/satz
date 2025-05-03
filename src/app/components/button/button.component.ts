import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgIf
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({required: true}) label!: string;
  @Input() iconRight: string | undefined;
  @Input({transform: booleanAttribute}) inverse: boolean = false;
  @Input({transform: booleanAttribute}) filled: boolean = false;
  @Output() onButtonClick = new EventEmitter();

  onClick() {
    this.onButtonClick.emit();
  }
}
