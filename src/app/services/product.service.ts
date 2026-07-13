import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private products: Product[] = [
        { 
            id: 1, 
            name: 'Astérix', 
            price: 20, 
            description: 'Le héros du village et le plus rusé des Gaulois. Petit par la taille, il accomplit de grands exploits grâce à son intelligence. Il tire sa force surhumaine de la célèbre potion magique. C\'est le compagnon de route idéal pour toutes les aventures.', 
            imageUrl: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Asterix&backgroundColor=FDD90B' 
        },
        { 
            id: 2, 
            name: 'Obélix', 
            price: 25, 
            description: 'Le meilleur ami d\'Astérix et un grand amateur de sangliers. Il est tombé dans la marmite de potion magique quand il était petit. Ses effets sont donc permanents chez lui. Il exerce le métier de sculpteur et livreur de menhirs.', 
            imageUrl: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Obelix&backgroundColor=FDD90B' 
        },
        { 
            id: 3, 
            name: 'Idéfix', 
            price: 15, 
            description: 'Le fidèle petit chien d\'Obélix. Il est très intelligent et doté d\'un flair infaillible. C\'est aussi un grand défenseur de la nature. Il hurle de chagrin chaque fois que quelqu\'un déracine un arbre.', 
            imageUrl: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Idefix&backgroundColor=FDD90B' 
        },
        { 
            id: 4, 
            name: 'Panoramix', 
            price: 30, 
            description: 'Le vénérable druide du village. Sa plus grande réussite est la potion magique qui donne une force surhumaine. Sa grande sagesse est respectée par tous les habitants. C\'est le seul à connaître la recette secrète.', 
            imageUrl: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Panoramix&backgroundColor=FDD90B' 
        },
        { 
            id: 5, 
            name: 'Abraracourcix', 
            price: 28, 
            description: 'Le chef incontesté du village gaulois. Il est majestueux, courageux, mais parfois un peu ombrageux. Il ne craint qu\'une seule chose au monde. Il a peur que le ciel lui tombe sur la tête.', 
            imageUrl: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Abraracourcix&backgroundColor=FDD90B' 
        },
        { 
            id: 6, 
            name: 'Assurancetourix', 
            price: 18, 
            description: 'Le barde du village. Il est convaincu de son immense talent musical. Malheureusement, tout le monde pense qu\'il chante atrocement faux. Il finit d\'ailleurs souvent bâillonné lors des banquets traditionnels.', 
            imageUrl: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Assurancetourix&backgroundColor=FDD90B' 
        }
    ];

    getProducts(): Product[] {
        return this.products;
    }

    getProductById(id: number): Product | undefined {
        return this.products.find(product => product.id === id);
    }
}