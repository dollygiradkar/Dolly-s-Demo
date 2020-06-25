import { Component, OnInit,NgZone } from '@angular/core';
import {ProductCategoryService} from './product-category.service'
import {ProductListService} from './product-list.service'
import { HttpClient } from "@angular/common/http"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductListService],
})
export class AppComponent {
  title = 'AngularDemoProject';
  productCategory;
  products:any = {};
  prouctList ;
  classObject =this;
  log() {
    console.log("Name::::::::::::");
  }
  constructor(categoryService: ProductCategoryService,private productService : ProductListService,
                 private httpClient:HttpClient,private ngZone:NgZone){
      categoryService = new ProductCategoryService();
     
      this.productCategory = categoryService.getCategories();
      console.log(this.productCategory);
  }
   
  onCategorySelected(pCategory : string) : void {
    this.productCategory = pCategory;
    console.log("Selected Product Category::"+ pCategory);
    this.productService = new ProductListService(this.httpClient);
    this.productService.getProductList().subscribe(data => {
      //let demo=JSON.parse (data);
      console.log("Product List ::: "+ data);
     this.ngZone.run(() => {
          this.prouctList=data[pCategory];
      });
    });
  
  }
  // onGettingProductList(data){
  //     console.log("Productssssss::::c:::::::",data);
     
  //      this.ngZone.run(() => {
  //          this.prouctList=data;
  //       });
  // }
  onGettingProductList(data :any) :void {
   console.log("Productssssss:::::::::::",data);
   
  }
    
  
}
