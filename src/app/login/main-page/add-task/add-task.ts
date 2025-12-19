import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-add-task',
  standalone:true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
})
export class AddTask {
  assignedTo = new FormControl([]);
  category = new FormControl([]);

  priority: 'urgent' | 'medium' | 'low' | null = null;

  contacts = ['Alice', 'Bob', 'Charlie'];
  categories = ['Work', 'Personal', 'Urgent'];

  setPriority(p: 'urgent' | 'medium' | 'low') {
    if (this.priority === p) {
      this.priority = null;
    } else {
      this.priority = p;
    }
  }

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  

}


