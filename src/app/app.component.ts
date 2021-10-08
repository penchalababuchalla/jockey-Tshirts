import { Component,HostListener } from '@angular/core';
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
  changetxt : boolean;
  sortBy= "";
  avlSize:boolean;
  avlStyle:boolean;
  avlColor:boolean;
  avlFabric:boolean;
  avlSleeve:boolean;
  productsList: any;
  
  S=false;
  M=false;
  L=false;
  XL=false;
  XXL=false;
  Full=false;
  Half=false;
  isHide: boolean =false;
  isShow:boolean =false;
  cotton:boolean =false;
  ctnPlstr:boolean =false;
  polyester:boolean =false;
  Cotton: boolean =false;
  CtnPolstr: boolean =false;
  Polyester:boolean =false;
  url!: string;
  pageNumber=0;
  sortedProducts: any;

  constructor(private http: HttpClient){
    
    var url = 'https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f='
    this.http.get<any>(url).subscribe(data => {
      this.productsList=data
      this.sortedProducts = this.productsList.Data.StyleDetails
      this.listOfProducts = this.sortedProducts
    });
    this.changetxt = false;
    this.avlSize = true;
    this.avlStyle = true;
    this.avlColor = true;
    this.avlFabric = true;
    this.avlSleeve = true;
  }    
  sortingOrder(){
    if(this.sortBy=="popular"){
    var url = `cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=popular&ctkn=&dir=&f=` 
    } else if(this.sortBy=="price: High to Low"){
      var url = `cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=price&ctkn=&dir=desc&f=`
    } else if(this.sortBy=="price: Low to High"){
      var url = `cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=price&ctkn=&dir=asc&f=`
    } else if(this.sortBy=="bestseller"){
      var url = `cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=bestseller&ctkn=&dir=&f=`
    }   
    if(this.S==true){
      debugger
      var url =`cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=size=s`
    }   
    this.http.get<any>('https://api.jockey.in/api/productsbystyles?'+this.url).subscribe(data => {
      debugger 
      this.listOfProducts = data.Data.StyleDetails
    }); 
  } 
  showSize(){
    this.avlSize = false; 
  }
  showStyle(){
    this.avlStyle = false;
  }
  showColor(){
    this.avlColor = false;
  }
  showFabric(){
    this.avlFabric = false;
  }
  showSleeve(){
     this.avlSleeve = false;
  }
  sizeS(){
    if(this.S== true){
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=size=s`
    } else {
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=`
    }
    this.http.get<any>(url).subscribe(data  => {
      this.listOfProducts = data.Data.StyleDetails
    });
  }
  sizeM(){
    if(this.M== true){
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=size=m`
    } else {
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=`
    }
    this.http.get<any>(url).subscribe(data  => {
      this.listOfProducts = data.Data.StyleDetails
    });
  }
  sizeL(){
    if(this.L== true){
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=size=l`
    } else {
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=`
    }
    this.http.get<any>(url).subscribe(data  => {
      this.listOfProducts = data.Data.StyleDetails
    });
  }
  sizeXL(){
    if(this.XL== true){
      debugger
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=size=xl`
    } else {
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=`
    }
    this.http.get<any>(url).subscribe(data  => {
      this.listOfProducts = data.Data.StyleDetails
    });
  }
  sizeXXL(){
    debugger
    if(this.XXL== true){
      debugger
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=size=xxl`
    } else {
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=`
    }
    this.http.get<any>(url).subscribe(data  => {
      this.listOfProducts = data.Data.StyleDetails
    });
  }
  typeCotton(){
    if(this.Cotton==true){
      var url =`https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=cotton-t-shirts-f02rosuc06huyi&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=`
      this.ctnPlstr=true;
      this.polyester=true;
    } else {
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=`
      this.polyester=false;
      this.ctnPlstr=false;
    }
    this.http.get<any>(url).subscribe(data  => {
      this.listOfProducts = data.Data.StyleDetails
    });
  }
  typeCtnPolstr(){
    if(this.CtnPolstr==true){
      var url =`https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=cotton-and-polyester-t-shirts-f0263iac06huyi&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=`
      this.cotton=true;
      this.polyester=true;
    } else {
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=`
      this.cotton=false;
      this.polyester=false;
    }
    this.http.get<any>(url).subscribe(data  => {
      this.listOfProducts = data.Data.StyleDetails
    });
  }
  typePolyester(){
    if(this.Polyester==true){
      var url =`https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=polyester-t-shirts-f022a7rc06huyi&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=`
      this.cotton=true;
      this.ctnPlstr=true;
    } else {
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=`
      this.cotton=false;
      this.ctnPlstr=false;
    }
    this.http.get<any>(url).subscribe(data  => {
      this.listOfProducts = data.Data.StyleDetails
    });
  }
  SleeveFull(){
    debugger
    if(this.Full==true){
      this.isHide=true;
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=full-sleeves-t-shirts-s045texc06huyi&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=`
    } else {
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=`
      this.isHide=false;
    }
    this.http.get<any>(url).subscribe(data  => {
      this.listOfProducts = data.Data.StyleDetails
    });
  }
  SleeveHalf(){
    if(this.Half==true){
      this.isShow=true;
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=half-sleeves-t-shirts-s0423gec06huyi&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=`
    } else {
      var url = `https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f=`
      this.isShow=false;
    }
    this.http.get<any>(url).subscribe(data  => {
      this.listOfProducts = data.Data.StyleDetails
    });
  }
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    debugger
  let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  let max = document.documentElement.scrollHeight;
   if(pos == max )   {
     var url ='https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=2&ps=12&by=&ctkn=&dir=&f='
     this.http.get<any>(url).subscribe(data => {
      this.listOfProducts = data.Data.StyleDetails
     })
    // this.pageNumber = this.pageNumber + 1;
    // let nextPageProducts = this.sortedProducts.slice(this.pageNumber * 12, this.pageNumber * 12 + 12)
    // this.listOfProducts = this.listOfProducts.concat(nextPageProducts);
   }
  }
}

