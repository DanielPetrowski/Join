import { Component,ViewChild } from '@angular/core';
import { Dialog } from '../../../../../shared/dialog/dialog';

@Component({
  selector: 'app-dialog-show-edit-task',
  imports: [Dialog],
  templateUrl: './dialog-show-edit-task.html',
  styleUrl: './dialog-show-edit-task.scss',
})
// In dialog-show-edit-task.ts

export class DialogShowEditTask {
  // Du brauchst Zugriff auf die eigentliche Dialog-Komponente (Shared Component)
  @ViewChild(Dialog) dialog!: Dialog; 

  // Diese Methode hat gefehlt:
  open() {
    this.dialog.open();
  }
}

