import { Component,ViewChild} from '@angular/core';
import { Dialog } from '../../../../shared/dialog/dialog';

@Component({
  selector: 'app-dialog-add-task',
  imports: [Dialog],
  templateUrl: './dialog-add-task.html',
  styleUrl: './dialog-add-task.scss',
})
export class DialogAddTask {
  @ViewChild(Dialog) dialog!: Dialog;

    open() {
    this.dialog.open();
  }
}
