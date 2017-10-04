import { Component, OnInit, Renderer2, ElementRef, ViewChild, Directive, AnimationPlayer} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders,HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})



export class OrdersComponent implements OnInit {


  
  public rForm : FormGroup;
  sForm: FormGroup;
  ordertypes : string[]= ['MKT','LMT','SL','SL-M'];
  products: string[]=['CNC','MS'];
  ordervalidities: string[]=['DAY','IOC'];
  trantypes : string[]=['BUY','SELL'];
  portfolios: string[]=['Natrayans','Nirudhis','Ananthis','Nidha','Jayakodi','Palaniappan','Arun'];
  selectedpfs:string[];
  selectedpfscpy:string[];
  rform : any;
  myjsoncpy: any;
  myjsontosubmit=[];
  myjsonpf : any[];  
  myjsonporttran =[{portfolio:null ,data: []}];
  myjsontran=[{portfolio:null ,data:{}}];
  matchindxo:number;

  // Values for submitting the form START

  api_key :string = 'uptxfbd1y845rxva';
  //values:string='[{"tradingsymbol": "INFY","exchange": "NSE","transaction_type": "BUY","order_type": "MARKET","quantity": 10,"readonly": "true"}]';
  values=this.myjsontosubmit;
  //values1 = JSON.parse(this.values);
  values3 :string;
  

  
  // Values for submitting the form END

  constructor(private fb: FormBuilder, private renderer: Renderer2) { 
    this.rForm = fb.group({
      
      'Portfolioname':[null,Validators.required],
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

  @ViewChild('someInput') someInput: ElementRef;
  @ViewChild('natbutton') natbutton: ElementRef;
  @ViewChild('anabutton') anabutton: ElementRef;
  @ViewChild('myform') myform: ElementRef;

  natrayan() {
    //this.someInput.nativeElement.value = "Anchovies!";
    //this.renderer.setAttribute(this.someInput.nativeElement,"value","Anchovies!");
    //this.renderer.setProperty(this.myform.nativeElement,"submit",true);
    this.myform.nativeElement.submit();
  }

ngOnInit() {

}



removechip(closechipval: string): void {
  this.selectedpfscpy = this.selectedpfs;
  let index = this.selectedpfs.indexOf(closechipval);

  if (index >= 0) {
    this.selectedpfscpy.splice(index, 1);
    this.selectedpfs=this.selectedpfscpy.slice(0);
    
  }
}



 addStocklist(rform){
  //this.rformv=null;  
  this.myjsoncpy = null;
  //this.rformv=rform;
  this.myjsoncpy=rform;
  //console.log(JSON.stringify(this.rformv));
  this.myjsonpf=this.myjsoncpy.Portfolioname;
  delete this.myjsoncpy.Portfolioname;
  //this.myjsontran.push(this.rformv);


  //Code for stock wise START
  /* Code to be implemented to make sure same stocks get combined and not added as separate item in the array*/
  if(this.myjsontran[0].portfolio==null){
       
    this.myjsontran[0].portfolio=this.myjsonpf;
    this.myjsontran[0].data=this.myjsoncpy;
    

  }else{
  //  console.log("inside else");
    this.myjsontran[this.myjsontran.length]={portfolio:null ,data: []};
    this.myjsontran[this.myjsontran.length-1].portfolio=this.myjsonpf;
    this.myjsontran[this.myjsontran.length-1].data=this.myjsoncpy;
  };

//Code for stock wise ENDS

  var i=0;
  //Code for portfolio wise START
        var index; 

        for(i=0;this.myjsonpf.length>i;i+=1){
          var pfmatchindex=this.hastag(this.myjsonpf[i]);
          console.log(pfmatchindex);



          if (pfmatchindex == -1){
            index = this.myjsonporttran.length-1;
            if(index ==0){
                if(this.myjsonporttran[index].portfolio==null){
                  index=0;
                }
                else{
                  index=index+1;
                  this.myjsonporttran[index]={portfolio:null ,data: []};
                }
            }else{
                index=index+1;
                this.myjsonporttran[index]={portfolio:null ,data: []};      
            }
            this.myjsonporttran[index].portfolio=this.myjsonpf[i];
            this.myjsonporttran[index].data[0]=this.myjsoncpy;       
          }

          if(pfmatchindex>=0){               
            //var dataindex=this.myjsonporttran[pfmatchindex].data.length-1;        
            this.myjsonporttran[pfmatchindex].data.push(this.myjsoncpy);
          }

        }
      //Code for portfolio wise END
     



    //code for JSON to submit START
    this.myjsontosubmit.push(this.myjsoncpy);
    this.values3=JSON.stringify(this.myjsontosubmit);  
    //code for JSON to submit END


    console.log("portfolio wise : "+JSON.stringify(this.myjsonporttran));
    console.log("Stock wise : "+JSON.stringify(this.myjsontran));
    console.log("to submit : "+JSON.stringify(this.myjsontosubmit));


  this.rForm.reset();

 };

/* hasmatch(tradsym : string){
  var l =null;
  var matchindx:number;
  matchindx=-1;
  for (l=0;this.myjsontran.length>l;l+=1){
    if(this.myjsontran[l].tradingsymbol==tradsym){
      matchindx=l;
    }
  }
//loop through all the elements and see if they match
  var result = Object.keys(this.myjsoncpy);
  if (matchindx > -1){
  for(l=0;result.length>l;l+=1){
    if(this.myjsontran[matchindx][result[l]]!=this.myjsoncpy[result[l]])
    {
      matchindx=-1;
      return matchindx;
    }
  }
  return matchindx;
} 

 };*/

 hastag(tagname : string){
  var k =null;
  for (k=0;this.myjsonporttran.length>k;k+=1){
    if(this.myjsonporttran[k].portfolio==tagname){
        return k;
    }
  }
  return -1;
};

removeitem(pffs){
  console.log(pffs);
}


}

  /*
  
 ngOnInit() {
  
  //this.renderer.listen(this.anabutton.nativeElement,'click',(event) => this.natrayan());
  
  //this.renderer.listen(this.myform.nativeElement,'submit',(event) => this.myform.nativeElement.submit());
  //this.natbutton.nativeElement.click();
  //this.renderer.invokeElementMethod(this.natbutton.nativeElement, "click");
 //this.renderer.listen(this.natbutton.nativeElement,'click',(event) => console.log(event));
  //this.renderer.setAttribute(this.someInput.nativeElement,"value","yellow");
  }
  
  options = [
    'Nirudhi',
    'Nidha',
    'Retirement'
   ];
   

   ordertypes= [
    'MARKET',
    'LIMIT',
    'STOPELOSS',
    'STOPLOSSLIMIT'
   ];


   trantypes=[
     'BUY',
     'SELL'
   ];

  object3=[];
  object4=[];
  lengths: any;
  rForm: FormGroup;
  rFormSub: FormGroup;
  sForm: FormGroup;
  post: any;
  post1:any;
  post2:any;
  description:string = '';
  Portfolioname:string = '';
  tradingsymbol:string='';
  exchange:string='';
  transaction_type:string='';
  order_type:string='';
  quantity:number=0;
  product:string='';
  price:number=0.0;
  trigger_price:number=0.0;
  disclosed_quantity:number=0;
  validity:string='';
  readonly:string='';
  api_key :string = 'uptxfbd1y845rxva'
  
  //variables for Slider
  color = 'primary';
  checked = true;
  disabled = false;  
  
  data:string;
  ssss:string;
  ssss1:string;
  ssss2:string;
  data1:any;
  First:number=1;

  rFormarry:FormGroup[];

  constructor(private fb: FormBuilder,private http:HttpClient, private renderer: Renderer2) { 
    
    this.rForm = fb.group({
      
      'Portfolioname':[null,Validators.required],
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
       this.rFormarry.push(this.rForm);
   this.sForm = fb.group({
      'api_key':[null,Validators.required],
      'data':[null,Validators.required]
    });
   
  }
  values:string='[{"tradingsymbol": "INFY","exchange": "NSE","transaction_type": "BUY","order_type": "MARKET","quantity": 10,"readonly": "true"}]';
  values1 = JSON.parse(this.values);
  values3=JSON.stringify(this.values1);

  @ViewChild('someInput') someInput: ElementRef;
  @ViewChild('natbutton') natbutton: ElementRef;
  @ViewChild('anabutton') anabutton: ElementRef;
  @ViewChild('myform') myform: ElementRef;

  natrayan() {
     //this.someInput.nativeElement.value = "Anchovies!";
     this.renderer.setAttribute(this.someInput.nativeElement,"value","Anchovies!");
     //this.renderer.setProperty(this.myform.nativeElement,"submit",true);
     this.myform.nativeElement.submit();
   }


   addStocklist(){
      
    this.rFormarry.push(this.rForm);
   }


  addPost(ssss1){
    
    this.object3.push(ssss1);
    this.ssss2=JSON.stringify(this.object3);
    console.log(this.object3);
   /* if (this.First ==1){
      this.ssss1=JSON.stringify(ssss1);    
      this.First++;
    } else{
    //this.ssss1=JSON.stringify(ssss1);
      this.ssss1=this.ssss1+ ','+JSON.stringify(ssss1);
      this.First++;
    }
   // console.log(this.ssss1)
   // console.log(ssss1);
    this.ssss2='{"data": ['+this.ssss1+']}'
    console.log(JSON.parse(this.ssss2));
    this.post=JSON.parse(this.ssss2);
    this.post1=JSON.stringify(this.post);
    console.log(JSON.stringify(JSON.parse(this.ssss2)));
   /* "order_type":post.order_type,
       "product":post.product,
    "price":parseFloat(post.price),
    "trigger_price":parseFloat(post.trigger_price),
        "disclosed_quantity":parseFloat(post.disclosed_quantity),
    "validity":post.validity,*/
    //this.ssss = this.object3;  
    //this.ssss=post.tradingsymbol; 

/*    this.ssss= JSON.stringify({   
    "tradingsymbol":post.tradingsymbol,
    "exchange":post.exchange,
    "transaction_type":post.transaction_type,   
    "quantity":parseFloat(post.quantity),
    "readonly":post.readonly
    })
    this.object3.push(this.ssss);
    this.lengths='['+this.object3+']';
   // this.lengths='[{"api_key":"uptxfbd1y845rxva","data":'+this.object3+'}]';
  }
  
/*   dataPost(data1){
    console.log(data1); */
    /*var body =  this.ssss2;
    var headers= new HttpHeaders();
    console.log(body);
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
     this.http
    .post('http://127.0.0.1:8080/nat',data1,{ headers: headers }) 
    .subscribe();*/

/*     this.http
    .post('https://w98vuly6s7.execute-api.ap-southeast-1.amazonaws.com/dev/dev',data1) 
    .subscribe();
 */

    /*
    this.lengths='{"api_key":"'+ this.api_key+'","data":'+this.ssss1+'}';
    this.lengths=JSON.parse(this.lengths);
    this.lengths=JSON.stringify(this.lengths);
  var body =  this.lengths;
  //var body= `api_key=${this.api_key}&data=${this.ssss1}`;
  console.log(this.lengths);
  var headers= new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  headers.append('DataType', 'json');
    console.log(headers);
  this.http
    .post('http://127.0.0.1:8000/',body, { headers: headers }) 
    .subscribe();
   /*   this.object4.push(['api_key',this.api_key]);
    this.object4.push('data',this.object3) ;
  console.log(this.ssss);
  console.log(this.object4);
  //this.lengths = 'api_key=uptxfbd1y845rxva&data=' + encodeURIComponent(this.ssss);
  this.lengths=JSON.stringify(this.object4);
  //this.lengths=encodeURIComponent((this.lengths));
  console.log(this.lengths);
  
  
  this.http
    .post('http://127.0.0.1:800/',this.lengths ,{headers: new HttpHeaders().set('Content-Type', 'application/json')}
                                                  /*.set('Access-Control-Allow-Headers', 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type')

                                                  .set('Upgrade-Insecure-Requests','1')
                                                  .set('Access-Control-Allow-Origin', '*')}
          )
    .subscribe();


    /*'https://kite.trade/connect/basket'
    'http://webhook.site/a1d7cec2-1ffa-4d74-847d-18c593ff2053'
    'http://mockbin.org/bin/580d4db0-4475-45ce-8bbc-3da53a7a9072?foo=bar&foo=baz'
 }


}*/
