import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  constructor(private service:ProductsService, private router:Router) { }
  productlist=null;
  searchtext:string="";
  filteredProductList=null;
  ngOnInit(): void {
    this.productlist=this.service.getproductlist();
    this.filteredProductList=this.productlist;
  }

  gotoproductlist(): void{
    this.router.navigate(['']);
  }

  filterproduct():void{
    this.filteredProductList=this.productlist.filter(element => element.name.includes(this.searchtext));
  }

  clearsearch():void{
    this.filteredProductList=this.productlist;
    this.searchtext="";
  }
  deleteproduct(item:any):void{
    this.service.deleteProduct(item.id);
  }
  addquantity(item:any):void{
      this.service.increaseProductQuantity(item.id);
  }

  subquantity(item:any):void{
    this.service.decreaseProductQuantity(item.id);
}
  
}
