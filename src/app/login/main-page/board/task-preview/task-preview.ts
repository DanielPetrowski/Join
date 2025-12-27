import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardTask } from "../../../../interfaces/task-board.interface";
import { TaskType } from '../../../../types/task-type';

@Component({
  selector: 'app-task-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-preview.html',
  styleUrls: ['./task-preview.scss'],
})
export class TaskPreview {
  @Input({ required: true }) task!: BoardTask;

  readonly TaskType = TaskType;

  get taskTypeSvg(): string {
    switch (this.task.type) {
      case TaskType.UserStory:
        return 'img/task_type_user_story.svg';
      case TaskType.TechnicalTask:
        return 'img/task_type_technical_task.svg';
      default:
        return '';
    }
  }
}
