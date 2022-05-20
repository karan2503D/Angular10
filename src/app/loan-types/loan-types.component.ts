import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {
  addLoanTypesForm!: FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    // this.addLoanTypesForm = new FormGroup({
    //   'loanName' : new FormControl(),
    //   'loanDesc' : new FormControl()
    // })

    this.addLoanTypesForm = this.fb.group({
      'loanName' : new FormControl('ABC'),
      'loanDesc' : new FormControl('Some by default description and data show')
    });

  }

  addLoanType(){
    console.log(this.addLoanTypesForm.value);
  }

}
