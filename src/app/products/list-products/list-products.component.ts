import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

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

  gotoproductsdetail(id:number): void{
    this.router.navigate(['/product/'+id]);
  }

  filterproduct():void{
    this.filteredProductList=this.productlist.filter(element => element.name.includes(this.searchtext));
  }

  clearsearch():void{
    this.filteredProductList=this.productlist;
    this.searchtext="";
  }
}
