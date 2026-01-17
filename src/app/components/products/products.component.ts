import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  currentPage: number = 0;

constructor(
  private productsService: ProductsService,
  private router: Router) { }

ngOnInit(): void {
  console.log("ProductsComponent initialized");
  this.fetchProducts();
}
fetchProducts(): void {
  this.productsService.getProducts().subscribe({next: (products) => {
    this.products = products as Product[];
  }})
}
nextPage(): void {
  if ((this.currentPage + 1) * 10 < this.products.length){
    this.currentPage++;
  }
}
prevPage(): void {
  if (this.currentPage > 0){
    this.currentPage--;
  }
}
}