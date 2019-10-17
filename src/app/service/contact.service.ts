import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/class/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private urlContacts = 'https://jsonplaceholder.typicode.com/users';
 // private urlContactById = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {
  }
  
   getContacts (): Observable<Contact[]> {// renvoi un observable et le transforme avec Observable<Contact[]> 
    return this.http.get<Contact[]>(this.urlContacts);// caster la reponse de service avec <Contact[]>
  }


 /* getContactsById (): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.urlContactById);
  }*/
}
