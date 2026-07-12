import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private products: Product[] = [
        { id: 1, name: 'Astérix', price: 20, description: 'Le célèbre guerrier gaulois.', imageUrl: 'assets/asterix.jpg' },
        { id: 2, name: 'Obélix', price: 25, description: 'Le livreur de menhirs.', imageUrl: 'assets/obelix.jpg' }
    ];

    getProducts(): Product[] {
        return this.products;
    }
}