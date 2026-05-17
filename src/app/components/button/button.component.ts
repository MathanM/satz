import {ChangeDetectionStrategy, booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgIf
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input({required: true}) label!: string;
  @Input() iconRight: string | undefined;
  @Input({transform: booleanAttribute}) inverse: boolean = false;
  @Input({transform: booleanAttribute}) filled: boolean = false;
  @Output() onButtonClick = new EventEmitter();

  get isTalkIcon(): boolean {
    return this.iconRight?.startsWith('talk') ?? false;
  }

  onClick() {
    this.onButtonClick.emit();
  }
}
