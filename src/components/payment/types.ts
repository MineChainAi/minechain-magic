
// Define our common payment types
export enum PaymentStage {
  INITIAL = 'initial',
  PROCESSING = 'processing',
  AWAITING_PAYMENT = 'awaiting_payment',
  COMPLETED = 'completed',
  ERROR = 'error'
}

// Define the charge status type
export type ChargeStatus = 'NEW' | 'PENDING' | 'COMPLETED' | 'EXPIRED' | 'UNRESOLVED' | 'RESOLVED' | 'CANCELED' | 'CONFIRMED';

export interface PaymentModalProps {
  onClose: () => void;
  simulationMode?: boolean;
  paymentCurrency?: 'USDC' | 'BTC' | 'ETH';
}
