
export interface BlockData {
  id: number;
  status: 'available' | 'sold';
  purchaseDate?: string;
  buyerWallet?: string;
}
