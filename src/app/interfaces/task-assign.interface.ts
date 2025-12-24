import { Contact } from './contact.interface';

export interface TaskAssign {
  id?: string;
  contact: Contact;
  initials: string;
  color: string;
}
