import { Component } from '@angular/core';
import { SingleContact } from './single-contact/single-contact';

@Component({
  selector: 'app-contacts',
  imports: [SingleContact],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts {

}
