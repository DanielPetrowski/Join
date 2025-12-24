import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardTask } from "../../../../interfaces/task-board.interface";

@Component({
  selector: 'app-task-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-preview.html',
})
export class TaskPreview {
  @Input({ required: true }) task!: BoardTask;
}
