import { RootState } from "@/redux/store";
import { TMedicine } from "@/types/medicines.types";
import { createSlice } from "@reduxjs/toolkit";

export interface ICartMedicine extends TMedicine {
  orderQuantity: number;
}
interface IInitialState {
  medicines: ICartMedicine[];
  isPrescriptionRequired: boolean;
}
const initialState: IInitialState = {
  medicines: [],
  isPrescriptionRequired: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add To Cart
    addToCart: (state, action) => {
      if (action.payload?.prescriptionRequired) {
        state.isPrescriptionRequired = true;
      }
      // Check Medicien Exist or Not
      const isExistMedicine = state.medicines?.find(
        (medicine) => medicine?._id === action.payload._id
      );
      if (isExistMedicine) {
        isExistMedicine.orderQuantity += 1;
        return;
      }

      state.medicines.push({ ...action.payload, orderQuantity: 1 });
    },
    //  Increament Medicine Order Quantity
    increamentMedicineQuantity: (state, action) => {
      const increamentQuantity = state.medicines.find(
        (medicine) => medicine?._id === action.payload
      );
      if (increamentQuantity) {
        increamentQuantity.orderQuantity += 1;
        return;
      }
    },
    //  decreament Medicine Order Quantity
    decreamentMedicineQuantity: (state, action) => {
      const decreamentQuantity = state.medicines.find(
        (medicine) => medicine?._id === action.payload
      );
      if (decreamentQuantity && decreamentQuantity.orderQuantity > 1) {
        decreamentQuantity.orderQuantity -= 1;
        return;
      }
    },

    // Handle Remove Medicine
    removeCartMedicine: (state, action) => {
      state.medicines = state.medicines.filter(
        (medicine) => medicine?._id !== action.payload
      );
    },
  },
});

export const cartMedicineSelector = (state: RootState) => {
  return state.cart.medicines;
};

// Export Actions
export const {
  addToCart,
  increamentMedicineQuantity,
  decreamentMedicineQuantity,
  removeCartMedicine,
} = cartSlice.actions;

// Export Reducer
export default cartSlice.reducer;
