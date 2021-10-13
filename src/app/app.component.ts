import { Component,HostListener } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  ctn:boolean =false;
  ctnPlstr:boolean =false;
  plstr:boolean =false;
  productsList: any;
  
  sizeS=false;
  sizeM=false;
  sizeL=false;
  sizeXL=false;
  sizeXXL=false;
  styl2714=false;
  styl2715=false;
  styl2717=false;
  styl2726=false;
  stylAM50=false;
  stylAM51=false;
  fullSleeve=false;
  halfSleeve=false;
  raglanSleeve=false;
  showRaglanSleeve =false;
  showHalfSleeve =false;
  showFullSleeve=false;
  clrRed=false;
  clrBlue=false;
  clrBlack=false;
  clrYellow=false;
  clrGreen=false;
  clrWhite=false;
  clrOrange=false;
  CtnPolstr=false;
  Polyester=false;
  Cotton=false;
  
  
  pageNumber=1;
  avblProducts: any;

  constructor(private http: HttpClient,private router: Router, private route: ActivatedRoute){
    
    this.router = router;
    this.route = route;

    var url = 'https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f='
    this.http.get<any>(url).subscribe(data => {
      this.productsList=data
      this.avblProducts = this.productsList.Data.StyleDetails
      this.listOfProducts = this.avblProducts
    });
    this.changetxt = false;
    this.avlSize = true;
    this.avlStyle = true;
    this.avlColor = true;
    this.avlFabric = true;
    this.avlSleeve = true;
  }    
  sortingOrder(){
    var url="cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&ctkn=&f=";
    if(this.sortBy=="popular"){
      url = url+`&by=popular` 
    } else if(this.sortBy=="price: High to Low"){
      url = url+`&by=price&dir=desc&`
    } else if(this.sortBy=="price: Low to High"){
      url = url+`&by=price&dir=asc&`
    } else if(this.sortBy=="bestseller"){
      var url = url+`&by=bestseller`
    }   
    let sizeFilters: string[] = [];
    if(this.sizeS==true){
      sizeFilters.push("s")
      this.router.navigateByUrl('/?size=' + sizeFilters)
    } else {
      this.router.navigateByUrl('/?size=' + sizeFilters)
    }
    if(this.sizeM==true){
      sizeFilters.push("m")
    }   
    if(this.sizeL==true){
      sizeFilters.push("l")
    }
    if(this.sizeXL==true){
      sizeFilters.push("xl")
    }
    if(this.sizeXXL==true){
      sizeFilters.push("xxl")
    }
    var sizeFiltersStrings = sizeFilters.join(":")
    
    
    let sleeveFilters:string[] = []
    if(this.fullSleeve==true){
      sleeveFilters.push("full-sleeves")
      this.showHalfSleeve=true;
      this.showRaglanSleeve=true;
    }
    if(this.halfSleeve==true){
      sleeveFilters.push("half-sleeves")
      this.showRaglanSleeve=true;
      this.showFullSleeve=true;
    }
    if(this.raglanSleeve==true){
      sleeveFilters.push("raglan-sleeves")
      this.showFullSleeve=true;
      this.showHalfSleeve=true;
    }

    let styleFilters:string[]= []
    if(this.styl2714==true){
      styleFilters.push("2714%20-%20sport%20t-shirt")
    }
    if(this.styl2715==true){
      styleFilters.push("2715%20-%20crew%20neck%20t-shirt")
    }
    if(this.styl2717==true){
      styleFilters.push("2717%20-%20sport%20t-shirt")
    }
    if(this.styl2726==true){
      styleFilters.push("2726%20-%20v-neck%20t-shirt")
    }
    if(this.stylAM50==true){
      styleFilters.push("am50%20-%20v-neck%20t-shirt")
    }
    if(this.stylAM51==true){
      styleFilters.push("am51%20-%20t-shirt")
    }
    var styleFiltersSrings = styleFilters.join(":")
    
    let colorFilters:string[] = []
    if(this.clrRed==true){
      colorFilters.push("red")
    }
    if(this.clrBlack==true){
      colorFilters.push("black")
    }
    if(this.clrBlue==true){
      colorFilters.push("blue")
    }
    if(this.clrGreen==true){
      colorFilters.push("green")
    }
    if(this.clrOrange==true){
      colorFilters.push("orange")
    }
    if(this.clrWhite==true){
      colorFilters.push("white")
    }
    if(this.clrYellow==true){
      colorFilters.push("yellow")
    }
    var colorFiltersString = colorFilters.join(":")
    
    let fabricFilters:string[] = []
    if(this.Cotton==true){
      fabricFilters.push("cotton")
      this.plstr=true;
      this.ctnPlstr=true;
    }
    if(this.CtnPolstr==true){
      fabricFilters.push("cotton-and-polyester")
      this.ctn=true;
      this.plstr=true;
    } else {
      this.plstr=false;
      this.ctn=false;
    }
    if(this.Polyester==true){
      fabricFilters.push("polyester")
      this.ctn=true;
      this.ctnPlstr=true;
    } else {
      this.ctn=false;
      this.ctnPlstr=false;
    }
    // url=url + `pno=`+this.pageNumber
    url = url + `size=`+sizeFiltersStrings + `|`
    url = url +`style=`+styleFiltersSrings + `|`
    url = url + `fabric=`+ fabricFilters +  `|`
    url = url + `sleeve=`+ sleeveFilters + `|`
    url = url + `color=`+ colorFiltersString + `|`
    
  debugger
    this.http.get<any>('https://api.jockey.in/api/productsbystyles?'+url).subscribe(data => {
      this.listOfProducts = data.Data.StyleDetailess
    }); 
  } 
  showSize(){
    // this.avlSize = false;
    if(this.avlSize==true){
      this.avlSize = false;
    } else {
      this.avlSize =true;
    }
  }
  showStyle(){
    if(this.avlStyle == true){
      this.avlStyle=false;
    }else{
      this.avlStyle=true;
    }
  }
  showColor(){
    if(this.avlColor == true){
      this.avlColor = false;
    }else{
      this.avlColor = true;
    }
  }
  showFabric(){
    if(this.avlFabric == true){
      this.avlFabric = false;
    }else{
      this.avlFabric = true;
    }
  }
  showSleeve(){
     if(this.avlSleeve ==true){
      this.avlSleeve = false;
     }else{
      this.avlSleeve = true;
     }
  }
  changeImg(productId:any,colorName:any){
    for (var i = 0; i < this.listOfProducts.length; i++) {
      if (this.listOfProducts[i].ProductId == productId) {
        for(var j = 0; j < this.listOfProducts[i].ProductDetails.length; j++){
          if (this.listOfProducts[i].ProductDetails[j].ColorName == colorName) {
            this.listOfProducts[i].activeImageUrl =  this.listOfProducts[i].ProductDetails[j].ListImagePath + this.listOfProducts[i].ProductDetails[j].Images.split('|')[0];
            this.listOfProducts[i].activeTitle = this.listOfProducts[i].ProductDetails[j].ProductTitle;
          }
        }
      }
    }
  }
  @HostListener("window:scroll", ["$event"])
  onWindowScroll(){
    if(window.scrollY + document.documentElement.clientHeight > document.documentElement.offsetHeight - 500){
     debugger
     this.pageNumber = this.pageNumber +1
     if(this.pageNumber == 2 ){
      // this.sortingOrder();
     }     
    }    
  }
}