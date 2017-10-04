import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

var KiteConnect;

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})

export class OrderCardComponent implements OnInit {
  public myForm: FormGroup;
  kite :any;
  result:any;
  
  pfs: string[]=['Nirudhis','Natrayans'];
  trantypes : string[]=['BUY','SELL'];
  ordertypes : string[]= ['MARKET','LIMIT','STOPELOSS','STOPLOSSLIMIT'];
  ordertypeselect:string;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      api_key: ['uptxfbd1y845rxva',[Validators.required]],
      orderlists: this.fb.array([
          this.initorderlists(),
      ])
  });
  this.kite = new KiteConnect("uptxfbd1y845rxva");
  
    this.kite.add({
      "exchange": "NSE",
      "tradingsymbol": "INFY",
      "quantity": 5,
      "transaction_type": "BUY",
      "order_type": "MARKET"
  });
  
  console.log(this.kite.get());
  console.log(this.kite.count());
}

  
  



initorderlists() {
  return this.fb.group({  
   // 'Portfolioname':[null,Validators.required],
    'tradingsymbol':[null,Validators.required],
    'exchange':[null,Validators.required],
    'transaction_type':[null,Validators.required],
    'order_type':[null,Validators.required],
    'quantity':[null,Validators.required],
    'product':[null,Validators.required],
    'price':[null,Validators.required],
    'trigger_price':[null,Validators.required],
    'disclosed_quantity':[null,Validators.required],
    'validity':[null,Validators.required],      
    'readonly':['false',Validators.required]
     });
    }

    addOrder() {
      const control = <FormArray>this.myForm.controls['orderlists'];
      control.push(this.initorderlists());
  }

  removeOrder(i: number) {
      const control = <FormArray>this.myForm.controls['orderlists'];
      control.removeAt(i);
  }

  saveOrder() {
      // call API to save
      // ...
      console.log('saved');
  }



}
