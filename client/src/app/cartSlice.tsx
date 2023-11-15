import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartProduct {
  productId: number;
  quantity: number;
}

interface CartState {
  userId: string;
  products: CartProduct[];
}

const initialState: CartState = {
  userId: "",
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      const { productId, quantity } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.productId === productId
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ productId, quantity });
      }
    },
    increment: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.products.find(
        (product) => product.productId === productId
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },

    decrement: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.products.find(
        (product) => product.productId === productId
      );
      if (existingProduct && existingProduct.quantity > 0) {
        existingProduct.quantity -= 1;
      }
    },

    setCart: (state, action: PayloadAction<CartProduct[]>) => {
      state.products = action.payload;
    },
    
    deleteProduct: (state, action) => {
      const productIdToDelete = action.payload;
      state.products = state.products.filter(
        (product) => product.productId !== productIdToDelete
      );
    },
  },
});

export const { setCart, increment, decrement, addProduct } = cartSlice.actions;
export default cartSlice.reducer;
