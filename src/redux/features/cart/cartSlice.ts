import { TMedicine } from "@/types/medicines.types";
import { createSlice } from "@reduxjs/toolkit";
interface IInitialState {
  medicines: TMedicine[];
  isPrescriptionRequired: boolean;
}
const initialState: IInitialState = {
  medicines: [],
  isPrescriptionRequired: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

// Export Reducer
export default cartSlice.reducer;
