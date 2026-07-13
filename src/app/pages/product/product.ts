import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class ProductComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // 1. On lit l'ID dans l'URL
    const idParam = this.route.snapshot.paramMap.get('id');
    
    // 2. On convertit cet ID en nombre et on cherche le produit
    if (idParam) {
      const productId = Number(idParam);
      this.product = this.productService.getProductById(productId);
    }
  }
}