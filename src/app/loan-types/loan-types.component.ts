import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit, OnChanges {
  addLoanTypesForm!: FormGroup;

  constructor(private fb : FormBuilder) { }
  ngOnChanges(): void {
    //  this.addLoanTypesForm.valueChanges.subscribe(data => {
    //    console.log(data);
    //  })

    // RxJS - Form Value Changes
    // this.addLoanTypesForm.get('loanName')?.valueChanges.pipe(
    //   map(data => {
    //       data
    //   })
    // )

    // Checks Status 
    this.addLoanTypesForm.statusChanges.subscribe(data => {
      console.log("Status Change");
    })

    // Normal Way 
    // this.addLoanTypesForm.get('loanName')?.valueChanges.subscribe(data => {
    //    console.log(data);
    //  });
  }

  ngOnInit(): void {
    // this.addLoanTypesForm = new FormGroup({
    //   'loanName' : new FormControl(),
    //   'loanDesc' : new FormControl()
    // })

    this.addLoanTypesForm = this.fb.group({
      'loanName' : new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      'loanDesc' : new FormControl()
    });

    // const newLoanObj = {
    //   'loanName' : 'Name',
    //   'loanDesc' : 'description this method is used in big applications'
    // }

    // this.addLoanTypesForm.setValue(newLoanObj);
    // this.addLoanTypesForm.patchValue(newLoanObj);
  }

  addLoanType(){
    // console.log(this.addLoanTypesForm.value);
    // console.log(this.addLoanTypesForm.get('loanName').value);
    // console.log(this.addLoanTypesForm.valueChanges.subscribe(data -> {
    //   console.log(data);
    // }))
  }



}
