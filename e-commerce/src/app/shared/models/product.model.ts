export interface Product {
    productId?: number;
    productName: string;
    productDesc: string;
    categoryId: number;
    supplierId: number;
    quantity: number;
    size: string;
    unitWeight: number;
    pictures: { pictureUrl: string }[];    currentOrder: string;
    idSku: string;
    unitPrice: number;
    unitsInStock: number;
    unitsOnOrder: number;
    productAvailable: string;
    discountAvailable: string;
    rating: number;
  }
  