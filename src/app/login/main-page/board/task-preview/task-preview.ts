<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-preview',
  imports: [
    CommonModule,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup
  ],
=======
import { Component,ViewChild } from '@angular/core';
import { DialogShowEditTask } from './dialog-show-edit-task/dialog-show-edit-task';

@Component({
  selector: 'app-task-preview',
  imports: [DialogShowEditTask],
>>>>>>> 3c78c269a7a90e1424b83ee0bbbf98cbafebe8bc
  templateUrl: './task-preview.html',
  styleUrl: './task-preview.scss',
})
export class TaskPreview {

<<<<<<< HEAD
  todoTasks: string[] = ['Test Task'];
  inProgressTasks: string[] = [];
  awaitFeedbackTasks: string[] = [];
  doneTasks: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
=======
    @ViewChild(DialogShowEditTask) dialogShowEditTask!: DialogShowEditTask;

  openDialogShowEditTask() {
    this.dialogShowEditTask.open();
>>>>>>> 3c78c269a7a90e1424b83ee0bbbf98cbafebe8bc
  }
}
