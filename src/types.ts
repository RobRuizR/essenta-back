export interface EssentaProduct {
  sizeId: string;
  fraganceName: string;
  colorName: string;
  productTypeName: string;
  amount: string;
}

export interface ConektaCustomer {
  name: string;
  email: string;
  phone: string;
  payment_sources?: Array<any>;
  shipping_contacts: Array<any>;
}

export interface ConektaPaymentData {
  type: string;
  payment_source_id?: string;
}

export interface ConektaProduct {
  name: string;
  unit_price: number;
  quantity: number;
  description: string;
}