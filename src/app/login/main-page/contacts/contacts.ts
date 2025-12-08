

import { CommonModule } from '@angular/common';
import { SingleContact } from './single-contact/single-contact';
import { Component, OnInit } from '@angular/core';
import { FirebaseServices } from '../../../firebase-services/firebase-services';
import { Contact } from '../../../interfaces/contact.interface';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, SingleContact],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})

export class Contacts implements OnInit {

  groupedContacts: { letter: string; contacts: Contact[] }[] = [];

  constructor(private firebase: FirebaseServices) { }

  ngOnInit(): void {
    // Erstinitialisierung
    this.sortAndGroup();

    // Da Firestore asynchron nachlädt, baue ich alle 300 ms die Gruppen neu ...
    // Nur für Sprint 1 – später wird dies durch Signals ersetzt.
    setInterval(() => {
      this.sortAndGroup();
    }, 300);
  }

  // Sortiert und gruppiert die Daten alphabetisch nach Anfangsbuchstabe ...
  sortAndGroup(): void {
    const list = this.firebase.contactsList;

    const tempGroups: { [key: string]: Contact[] } = {};
    var i: number;

    for (i = 0; i < list.length; i++) {
      var c = list[i];
      var letter = c.name.trim().charAt(0).toUpperCase();

      if (!tempGroups[letter]) {
        tempGroups[letter] = [];
      }
      tempGroups[letter].push(c);
    }

    const letters = Object.keys(tempGroups).sort();
    const result: { letter: string; contacts: Contact[] }[] = [];

    for (i = 0; i < letters.length; i++) {
      var l = letters[i];
      result.push({
        letter: l,
        contacts: tempGroups[l]
      });
    }

    this.groupedContacts = result;
  }

  // Erstellt Initialen aus dem Namen (z. B. "Anton Mayer" = "AM") ...
  getInitials(name: string): string {
    var trimmed = name.trim();
    if (trimmed.length === 0) {
      return '';
    }

    var parts = trimmed.split(' ');
    var first = parts[0].charAt(0).toUpperCase();
    var second = '';

    if (parts.length > 1) {
      second = parts[parts.length - 1].charAt(0).toUpperCase();
    }

    return first + second;
  }

  // Dummy für Sprint 1
  onAddContact(): void {
    console.log('Sprint-1 Dummy: Add new contact');
  }
}
