import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';

constructor(private router:Router){}


  gotoProductPanel():void{
    this.router.navigate(['']);


  }

  gotoAdminPanel():void{
    this.router.navigate(['/admin']);


  }

  gotAddProduct():void{
    this.router.navigate(['admin/add-product']);
  }
}
