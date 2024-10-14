export interface Product {
    id: number;
    image: string;
    productName: string;
    category: string;
    price: number;
    piece: number;
    availableColors: string[];
}

export interface Favorite {
    id: number;
    name: string;
    price: string;
    image: string;
    rating: number;
    reviewCount: number;
    isFavorite: boolean;
}