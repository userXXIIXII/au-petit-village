import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { FilterByNamePipe } from '../../pipes/filter-by-name.pipe';
import { SortbyPricePipe } from '../../pipes/sortby-price.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  // Déclaration des mdules ou pipes utilisés dans ce composant
  imports: [CommonModule, FormsModule, FilterByNamePipe, SortbyPricePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  searchTerm: string = ''; // Cette ligne corrige l'erreur sur searchTerm
  products: Product[] = []; // Cette ligne corrige l'erreur sur products

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}