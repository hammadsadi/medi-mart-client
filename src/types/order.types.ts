interface IMedicineItem {
  medicine: string; 
  quantity: number;
  prescriptionUrl?: string |null;
}

export type TOrderDetails ={
  medicines: IMedicineItem[];
  coupon?: string;
  deliveryOption: string;
  deliveryArea: string;
  deliveryDetailsAddress: string;
}
