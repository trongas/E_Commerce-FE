export interface ProductResponse {
    productId: number;
    productName: string;
    productDesc: string;
    categoryName: string;
    supplierName: string;
    unitPrice: number;
    unitsInStock: number;
    pictures: { pictureUrl: string }[];    productAvailable: string;
    discountAvailable: string;
    rating: number;
  }
  