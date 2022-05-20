import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-contact', // Plays ID Role of component
  templateUrl: './add-contact.component.html', 
  styleUrls: ['./add-contact.component.scss']// Style file connection
})
export class AddContactComponent implements OnInit, OnChanges, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
  }

   ngOnDestroy(){
     
   }
}
