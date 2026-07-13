import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Indispensable pour le lien vers le produit
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { FilterByNamePipe } from '../../pipes/filter-by-name.pipe';
import { SortbyPricePipe } from '../../pipes/sortby-price.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, FilterByNamePipe, SortbyPricePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  searchTerm: string = '';
  // On ajoute la variable de tri (croissant par défaut)
  sortDirection: 'asc' | 'desc' = 'asc'; 
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}