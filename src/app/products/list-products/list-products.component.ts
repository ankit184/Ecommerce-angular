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
  ngOnInit(): void {
    this.productlist=this.service.getproductlist();
    console.log(this.productlist);
  }

  gotoproductsdetail(id:number): void{
    this.router.navigate(['/product/'+id]);
  }

}
