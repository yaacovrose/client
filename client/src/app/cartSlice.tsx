// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface CartProduct {
//   productId: number;
//   quantity: number;
// }

// interface CartState {
//   userId: string;
//   products: CartProduct[];
// }

// const initialState: CartState = {
//   userId: "",
//   products: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addProduct: (state, action: PayloadAction<CartProduct>) => {
//       const { productId, quantity } = action.payload;
//       const existingProduct = state.products.find(
//         (product) => product.productId === productId
//       );
//       if (existingProduct) {
//         existingProduct.quantity += 1;
//       } else {
//         state.products.push({ productId, quantity });
//       }
//     },
//     increment: (state, action) => {
//       const productId = action.payload;
//       const existingProduct = state.products.find(
//         (product) => product.productId === productId
//       );
//       if (existingProduct) {
//         existingProduct.quantity += 1;
//       }
//     },

//     decrement: (state, action) => {
//       const productId = action.payload;
//       const existingProduct = state.products.find(
//         (product) => product.productId === productId
//       );
//       if (existingProduct && existingProduct.quantity > 0) {
//         existingProduct.quantity -= 1;
//       }
//     },

//     setCart: (state, action: PayloadAction<CartProduct[]>) => {
//       state.products = action.payload;
//     },
    
//     deleteProduct: (state, action) => {
//       const productIdToDelete = action.payload;
//       state.products = state.products.filter(
//         (product) => product.productId !== productIdToDelete
//       );
//     },
//   },
// });

// export const { setCart, increment, decrement, addProduct } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice, PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface CartProduct {
  _id?:string
  productId: number;
  quantity: number;
}

interface CartState {
  _id?:string
  userName: string;
  products: CartProduct[];
}

interface FetchCartDataPayload {
  name: string;
}

export const fetchCartData = createAsyncThunk(
  'cart/fetchCartData',
  async (payload: FetchCartDataPayload, { rejectWithValue }) => {
    try {
      // const response = await axios.get(`http://localhost:8181/api/cart/${payload.name}`);
      const response = await axios.get(`https://api-store-f2id.onrender.com/api/cart/${payload.name}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const initialState: CartState = {
  userName: "",
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
      axios.put(`https://api-store-f2id.onrender.com/api/cart`, {
        _id: state._id,
        userName: state.userName,
        product: state.products,
      });
    },
    increment: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.products.find(
        (product) => product.productId === productId
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
        if (state.userName !== "") {
          axios.put(`https://api-store-f2id.onrender.com/api/cart`, {
            _id: state._id,
            userName: state.userName,
            product: state.products,
          });
        }
      }
    },
    decrement: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.products.find(
        (product) => product.productId === productId
      );
      if (existingProduct && existingProduct.quantity > 0) {
        existingProduct.quantity -= 1;
        if (state.userName !== "") {
          axios.put(`https://api-store-f2id.onrender.com/api/cart`, {
            _id: state._id,
            userName: state.userName,
            product: state.products,
          });
        }
      }
    },
    setNameCart: (state, action) => {
      state.userName = action.payload;
      axios.put(`https://api-store-f2id.onrender.com/api/cart`, {
        _id: state._id,
        userName: state.userName,
        product: state.products,
      });
    },
    deleteProduct: (state, action) => {
      const productIdToDelete = action.payload;
      const updatedProducts = state.products.filter(
        (product) => product.productId != productIdToDelete
      );
      state.products = updatedProducts;
      if (state.userName !== "") {
        console.log(state.userName);
        axios.put(`https://api-store-f2id.onrender.com/api/cart`, {
          _id: state._id,
          userName: state.userName,
          product: state.products,
        });
      }
    },

  purchase: (state) => {
    state.products = []
    if (state.userName !== "") {
      axios.put(`https://api-store-f2id.onrender.com/api/cart`, {
        _id: state._id,
        userName: state.userName,
        product: state.products,
      });}
  }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCartData.fulfilled, (state, action) => {
      const { userName, product } = action.payload[0];
      state.userName = userName;
      product.forEach((product: CartProduct) => {
        const existingProductIndex = state.products.findIndex(
          (existingProduct) => existingProduct.productId === product.productId
        );

        if (existingProductIndex !== -1) {
          state.products[existingProductIndex].quantity += product.quantity;
        } else {
          state.products.push(product);
        }

      });
    });
  },
});

export const { setNameCart, increment, decrement, addProduct,deleteProduct,purchase } = cartSlice.actions;
export default cartSlice.reducer;