import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';
  onlyif = false;
  elseif = true;
  page_heading = "Heading"
  page_number = 10
  user_object={'first':'Test','second':'Test1'}
  superHero="super";
  styleProp="red";
  styleClassProp="c3"; 
  hello(){
    document.write("Hello");
  }
  conditionClass="c4";
  getClassNme(){

   
    return 'c3';
  }
  username="";
  arrayName = [
    {
      'firstName':'ABC',
      'lastName':'CD',
      'contactId':1234
    },
    {
      'firstName':'CDE',
      'lastName':'FG',
      'contactId':56789
    }
  ]

  // Built in pipes

  // loweCaseExample = "ABCDEFG";
  // upperCaseExample = "acsddeqas";
  // dateExample = Date.now();
  // jsonExample = {username: "test", major:"test"};
  // currencyExample = 125;
  // perExample = 0.574;
}
