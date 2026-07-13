// Pour trier vos figurines par prix (croissant ou décroissant)

import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
    name: 'sortbyPrice',
    standalone: true
})
export class SortbyPricePipe implements PipeTransform {
    transform(products: Product[], direction: 'asc' | 'desc'): Product[] {
        if (!products) return [];
        
        return products.sort((a, b) => {
            return direction === 'asc' ? a.price - b.price : b.price - a.price;
        });
    }
}