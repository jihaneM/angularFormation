import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact.service';
import { Contact } from 'src/app/class/contact';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   
  listeContacts: Contact[]; 

  constructor(private contactservice:ContactService) {
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(){
    /*pour consomer notre service il faut sabonner avec 'subsribe' */
    this.contactservice.getContacts().subscribe(/*la arrow function que tu vas mettre ici
    doit aller nourrir le tableau de contacts listeContacts */
    listeContacts=>this.listeContacts=listeContacts); 
  }


}
