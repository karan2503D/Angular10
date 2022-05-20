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
      'loanName' : new FormControl(),
      'loanDesc' : new FormControl()
    });

    const newLoanObj = {
      'loanName' : 'Name',
      'loanDesc' : 'description this method is used in big applications'
    }

    this.addLoanTypesForm.setValue(newLoanObj);
    this.addLoanTypesForm.patchValue(newLoanObj);
  }

  addLoanType(){
    // console.log(this.addLoanTypesForm.value);
    // console.log(this.addLoanTypesForm.get('loanName').value);
    // console.log(this.addLoanTypesForm.valueChanges.subscribe(data -> {
    //   console.log(data);
    // }))
  }

}
