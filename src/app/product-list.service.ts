import {ProductCategoryService} from './product-category.service'
import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService{
    productCategory;
    productList;
    constructor(private httpClient:HttpClient){
       
      //  this.getList();
    }
//     getList() {
//         this.httpClient.get("assets/productlist.json").subscribe(data => {
//       //let demo=JSON.parse (data);
//       console.log("Product List ::: "+ data);
//       this.productList = data;
//     })
//    }
    getProductList(){
      return this.httpClient.get("assets/productlist.json");    
    } 
   }