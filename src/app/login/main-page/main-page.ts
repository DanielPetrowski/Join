import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Navbar } from '../../shared/navbar/navbar';
import { Contacts } from './contacts/contacts';
import { Summary } from './summary/summary';
import { Board } from './board/board';
import { AddTask } from './add-task/add-task';

@Component({
  selector: 'app-main-page',
  imports: [Header, Navbar, Contacts, Summary, Board, AddTask],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
