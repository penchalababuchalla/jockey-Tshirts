import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jockey-Tshirts';
  textHide = true;
  listOfProducts:any;
  productsCount:any;
  changetxt : boolean;
  constructor(private http: HttpClient){
    
    var url = 'https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f='
    this.http.get<any>(url).subscribe(data => {
    
      this.productsCount =data
      this.listOfProducts = this.productsCount.Data.StyleDetails
    });
    this.changetxt = false;
    

  }    
  onSubmit(){
  }
  LowToHigh(){
    debugger
    this.listOfProducts.sort(function (a: { MRP: number; },b: { MRP: number; }) { return a.MRP-b.MRP })
      
  }
}

