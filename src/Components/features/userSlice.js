import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/1`);
  return res.data;
});

const initialState = {
  user: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log("add", action.payload);
      state.user = action.payload;
    },
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log("1", action.payload);
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.pending, (state, action) => {
        console.log("2", action.payload);
        state.user = action.payload;
        // loading yapalım
        state.loading = true;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log(action.payload);

        // hatayı handle et
        state.loading = false;
        alert("hata");
      });
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, add } = userSlice.actions;
export { fetchUser };
export default userSlice.reducer;
