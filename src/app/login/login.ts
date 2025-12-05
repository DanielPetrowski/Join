import { Component } from '@angular/core';
import { MainPage } from './main-page/main-page';
import { Header } from "../shared/header/header";
import { Navbar } from "../shared/navbar/navbar";

@Component({
  selector: 'app-login',
  imports: [MainPage, Header, Navbar],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
