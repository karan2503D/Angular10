import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { interval } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  photoId=0;
  productId=0;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe((params)=>{
      const enterValue = params;
      this.photoId = enterValue['photoId'];
      this.productId = enterValue['productId'];
    });
   }

  ngOnInit(): void {
  }

}
