// Pour filtrer la liste des figurines selon ce que l'utilisateur tape dans une barre de recherche

import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
    name: 'filterByName',
    standalone: true
})
export class FilterByNamePipe implements PipeTransform {
    transform(products: Product[], searchTerm: string): Product[] {
        if (!products || !searchTerm) return products;
        
        return products.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
}