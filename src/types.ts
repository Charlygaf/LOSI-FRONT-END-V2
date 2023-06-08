export interface Item {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  discount: number;
  Stocks: Stock[];
}
export interface Stock {
  id: number;
  size: string;
  stock: number;
}

export interface ItemArray {
  item: Item;
}
