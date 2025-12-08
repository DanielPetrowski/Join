import {  Component,EventEmitter, Input, Output, } from '@angular/core';
@Component({
  selector: 'app-dialog',
  standalone:true,
  imports: [],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog {
  @Input() width = '480px';
  @Output() closed = new EventEmitter<void>();

  isOpen = false;
  open() { this.isOpen = true; }
  close() { this.isOpen = false; this.closed.emit(); }
}