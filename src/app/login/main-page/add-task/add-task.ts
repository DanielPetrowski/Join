import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-add-task',
  standalone:true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
})
export class AddTask {
  priority: 'urgent' | 'medium' | 'low' | null = null;

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


