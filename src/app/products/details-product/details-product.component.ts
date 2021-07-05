import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service:ProductsService, private router:Router) { }
  
  id:number=0;
  productdescription:any=null;
   

  ngOnInit(): void {
      this.id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
      console.log(this.id);
      this.getproductdescription(this.id);
    

}

getproductdescription(id: number):void{

  this.productdescription=this.service.getproductdetails(id);
  console.log(this.productdescription);

}

goback():void{
  this.router.navigate([''])

}



}
