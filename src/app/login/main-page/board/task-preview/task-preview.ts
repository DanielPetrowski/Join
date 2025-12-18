import { Component,ViewChild } from '@angular/core';
import { DialogShowEditTask } from './dialog-show-edit-task/dialog-show-edit-task';

@Component({
  selector: 'app-task-preview',
  imports: [DialogShowEditTask],
  templateUrl: './task-preview.html',
  styleUrl: './task-preview.scss',
})
export class TaskPreview {

    @ViewChild(DialogShowEditTask) dialogShowEditTask!: DialogShowEditTask;

  openDialogShowEditTask() {
    this.dialogShowEditTask.open();
  }
}
