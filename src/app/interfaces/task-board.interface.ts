import { Task } from './task.interface';
import { TaskAssign } from './task-assign.interface';

export interface BoardTask extends Task {
  assigns: TaskAssign[];
  subtasksTotal: number;
  subtasksDone: number;
  progress: number;
}
