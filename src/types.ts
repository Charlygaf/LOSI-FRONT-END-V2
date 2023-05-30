export interface Item {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface ItemArray {
  item: Item;
}
