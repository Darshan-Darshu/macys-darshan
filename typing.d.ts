export type Product = {
  name: string;
  price: number;
  productType: string;
  productImage: string;
  _id?: string;
};

export type Bag = {
  productName: string;
  price: number;
  qty: number;
  imageUrl: string;
};
