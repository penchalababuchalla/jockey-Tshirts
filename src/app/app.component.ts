import { Component,HostListener } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

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
  avlFit:boolean;
  avlSize:boolean;
  avlStyle:boolean;
  avlColor:boolean;
  avlFabric:boolean;
  avlSleeve:boolean;
  ctn:boolean =false;
  ctnPlstr:boolean =false;
  plstr:boolean =false;
  filtersList: any;
  logo:boolean = true;
  size:any;

  totalRecords = 0;
  
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

  fitFiltersList:any = {}
  sizeFiltersList:any = {}
  styleFiltersList:any = {}
  colorFiltersList:any = {}
  fabricFiltersList:any = {}
  sleeveFiltersList:any = {}

  constructor(private http: HttpClient,private router: Router, private route: ActivatedRoute){
    
    this.router = router;

    var url = 'https://api.jockey.in/api/productsbystyles?cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&pno=1&ps=12&by=&ctkn=&dir=&f='
    this.http.get<any>(url).subscribe(data => {
      this.filtersList=data.Data.Facets
      this.avblProducts = data.Data.StyleDetails
      this.listOfProducts = this.avblProducts
      // this.totalRecords = data.Data.RowCount
    });
    this.changetxt = false;
    this.avlFit = true;
    this.avlSize = true;
    this.avlStyle = true;
    this.avlColor = true;
    this.avlFabric = true;
    this.avlSleeve = true;
  }   
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let appliedFitFiltersStr = params['fit'];
      if(appliedFitFiltersStr){
        let appliedFitFilters = appliedFitFiltersStr.split(':');
        for(let i=0;i<appliedFitFilters.length;i++){
          this.fitFiltersList[appliedFitFilters[i]] = true;
        }
      }
      let appliedSizeFiltersStr = params['size'];
      if(appliedSizeFiltersStr){
        let appliedSizeFilters = appliedSizeFiltersStr.split(':');
        for(let i=0; i < appliedSizeFilters.length; i++) {
          this.sizeFiltersList[appliedSizeFilters[i]] = true;
        }
      }
      let appliedStyleFiltersStr = params['style'];
      if(appliedStyleFiltersStr){
        let appliedStyleFilters = appliedStyleFiltersStr.split(':');
        for(let i=0; i < appliedStyleFilters.length; i++) {
          this.styleFiltersList[appliedStyleFilters[i]] = true;
        }
      }
      let appliedColorFiltersStr = params['color'];
      if(appliedColorFiltersStr){
        let appliedColorFilters = appliedColorFiltersStr.split(':');
        for(let i=0; i < appliedColorFilters.length; i++) {
          this.colorFiltersList[appliedColorFilters[i]] = true;
        }
      }
      let appliedFabricFiltersStr = params['fabric'];
      if(appliedFabricFiltersStr){
        let appliedFabricFilters = appliedFabricFiltersStr.split(':');
        for(let i=0;i<appliedFabricFilters.length;i++){
          this.fabricFiltersList[appliedFabricFilters[i]]=true;
        }
      }
      let appliedSleeveFiltersStr = params['sleeve'];
      if(appliedSleeveFiltersStr){
        let appliedSleeveFilters = appliedSleeveFiltersStr.split(':');
        for(let i=0; i < appliedSleeveFilters.length; i++) {
          this.sleeveFiltersList[appliedSleeveFilters[i]] = true;
        }
      }
      this.sortingOrder(false)
    });
  } 
  sortingOrder(navigate=true){
    // debugger
    var url="cat1=men&cat2=apparel-tops&cat3=t-shirts&cat4=&ps=12&ctkn=&f=";

    var availableFitFilterUrl = Object.keys(this.fitFiltersList);
    availableFitFilterUrl = availableFitFilterUrl.filter(url => this.fitFiltersList[url]==true);
    var fitFiltersString = availableFitFilterUrl.join(":");
    if(fitFiltersString!=""){
      url=url + `fittype=`+fitFiltersString + `|`
    }
    var availableSizeFilterUrl = Object.keys(this.sizeFiltersList);
    availableSizeFilterUrl = availableSizeFilterUrl.filter(url => this.sizeFiltersList[url]==true);
    var sizeFiltersString = availableSizeFilterUrl.join(":");
    if( sizeFiltersString !=""){
      url = url + `size=`+sizeFiltersString + `|`
    }
    var availableStyleFilterUrl = Object.keys(this.styleFiltersList);
    availableStyleFilterUrl = availableStyleFilterUrl.filter(url => this.styleFiltersList[url]==true);
    var styleFiltersString = availableStyleFilterUrl.join(":");
    if(styleFiltersString !=""){
      url = url + `style=`+styleFiltersString + `|`
    }
    var availableColorFilterUrl = Object.keys(this.colorFiltersList);
    availableColorFilterUrl = availableColorFilterUrl.filter(url => this.colorFiltersList[url]==true);
    var colorFiltersString = availableColorFilterUrl.join(":");
    if(colorFiltersString!=""){
      url = url+`color=`+colorFiltersString +`|`
    }
    var availableFabricFilterUrl = Object.keys(this.fabricFiltersList);
    availableFabricFilterUrl = availableFabricFilterUrl.filter(url => this.fabricFiltersList[url]==true);
    var fabricFiltersString = availableFabricFilterUrl.join(":");
    if(fabricFiltersString!=""){
      url = url+`fabric=`+fabricFiltersString +`|`
    }
    var availableSizeFilterUrl = Object.keys(this.sleeveFiltersList);
    availableSizeFilterUrl = availableSizeFilterUrl.filter(url => this.sleeveFiltersList[url]==true);
    var sleeveFiltersString = availableSizeFilterUrl.join(":");
    if(sleeveFiltersString!=""){
      url = url+`sleeve=`+sleeveFiltersString+`|`
    }

    if(this.sortBy=="popular"){
      url = url+`&by=popular` 
    } else if(this.sortBy=="price: High to Low"){
      url = url+`&by=price&dir=desc`
    } else if(this.sortBy=="price: Low to High"){
      url = url+`&by=price&dir=asc`
    } else if(this.sortBy=="bestseller"){
      url = url+`&by=bestseller`
    }   
 
    if(navigate) {
      const queryParams: Params = {};

      if(fitFiltersString!=""){
        queryParams['fit'] = fitFiltersString;
      }
      if(sizeFiltersString != ""){
        queryParams['size'] = sizeFiltersString;
      }
      if(colorFiltersString != ""){
        queryParams['color'] = colorFiltersString;
      }
      if(styleFiltersString != ""){
        queryParams['style'] =styleFiltersString;
      }
      if(fabricFiltersString != ""){
        queryParams['fabric'] = fabricFiltersString;
      }
      if(sleeveFiltersString != ""){
        queryParams['sleeve'] = sleeveFiltersString;
      }
      this.router.navigate(
        [], 
        {
          relativeTo: this.route,
          queryParams: queryParams, 
      });
    }
    url=url + `&pno=`+this.pageNumber
    if(this.pageNumber > 1){
      debugger
      this.http.get<any>('https://api.jockey.in/api/productsbystyles?'+url).subscribe(data => {
        this.logo=true;
        this.listOfProducts = this.listOfProducts.concat(data.Data.StyleDetails)
        // this.totalRecords = data.Data.RowCount
      }); 
    } else {
      debugger
      this.http.get<any>('https://api.jockey.in/api/productsbystyles?'+url).subscribe(data => {
        if(data.Data.StyleDetails == null){
          this.listOfProducts = []
        } else {
          this.listOfProducts = data.Data.StyleDetails;
          // this.totalRecords = data.Data.RowCount
        }
      }); 
    }
  } 
  showFit(){
    debugger
    if(this.avlFit==true){
      this.avlFit = false;
    }else {
      this.avlFit = true;
    }
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
            this.listOfProducts[i].changetxt = true;
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
      // if(this.totalRecords >  this.listOfProducts.length){
        this.pageNumber = this.pageNumber +1
        
        if(this.pageNumber==2){
          this.logo=false;
          this.sortingOrder();
        }     
     }    
   }
}
