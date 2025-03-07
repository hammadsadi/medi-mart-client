interface IMedicineItem {
  medicine: string; 
  quantity: number;
  prescriptionUrl?: string |null;
}

export type TOrderDetails = {
  medicines: IMedicineItem[];
  coupon?: string | null;
  deliveryOption: string;
  deliveryArea: string;
  deliveryDetailsAddress: string;
};

//
type Transaction = {
  id: string;
  transaction_status: string;
};

type MedicineDetails = {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  prescriptionRequired: boolean;
  manufacturer: string;
  expiryDate: string;
  category: string;
  symptoms: string[];
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Medicine = {
  _id: string;
  medicine: MedicineDetails;
  quantity: number;
  prescriptionUrl: string;
};

export type TOrderInfo = {
  _id: string;
  user: string;
  medicines: Medicine[];
  totalPrice: number;
  orderStatus: "Pending" | "Processing" | "Completed" | "Cancelled";
  isCheck: "In-Review" | "Accepted" | "Deny";
  deliveryOption: "Home-Delivery" | "Express-Delivery";
  deliveryArea: string;
  deliveryDetailsAddress: string;
  discount: number;
  deliveryCharge: number;
  paymentStatus: "Pending" | "Paid" | "Failed";
  transaction: Transaction;
  createdAt: string;
  updatedAt: string;
  __v: number;
};


