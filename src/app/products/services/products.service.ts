import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  private productList = [
    {
      id:1,
      name:"Product 1",
      quantity:9,
      description: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin wo",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYi15l2Yg6QscRFA59NoyeUW7tfFvsv01SgRiYKnswKRw_FRblXv06FXDhrj2ThPNvPQY&usqp=CAU",
      stars:4
    },
    {
      id:2,
      name:"Product 2",
      quantity:4,
      description: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin wo",
      image: "https://www.shutterbug.com/images/styles/600_wide/public/10-Photography-Tricks.jpg",
      stars:4.6
    }
  ]
  getproductlist():any[]{
    return this.productList;
  }

  getproductdetails(id: number):{}{
  
    return this.productList.find(element => element.id === id)
  }

  deleteProduct(id:number):void{
    const index=this.productList.findIndex(element=>element.id===id);
    this.productList.splice(index,1);
}

increaseProductQuantity(id:number):void{
  const index=this.productList.findIndex(element=>element.id===id);
  this.productList[index].quantity++;
}

decreaseProductQuantity(id:number):void{
  const index=this.productList.findIndex(element=>element.id===id);
  this.productList[index].quantity--;
}

addproduct(product):void{
  product.id=this.productList.length+1;
  this.productList.push(product);
}

  
}
