import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({

  name: "auth",

  initialState: {

    isLogin: false,

    admin: false,

    showRegister: false,

    selected : ""

  },

  reducers: {

    // User Login
    loginSuccess: (state) => {

      state.isLogin = true;

      state.admin = false;

      state.showRegister = false;

    },
    closeLogin:(state)=>{
      state.isLogin=false;
    },

    // Admin Login
    adminLogin: (state) => {

      state.admin = true;

      state.isLogin = false;

      state.showRegister = false;

    },

    // Logout
    logout: (state) => {

      state.isLogin = false;

      state.admin = false;

      state.showRegister = false;

    },

    // Open Register
    openRegister: (state, action) => {

      state.showRegister = true;
      
      state.selected =
        action.payload?.selected || "";

    },

    // Close Register
    closeRegister: (state) => {

      state.showRegister = false;

    }

  }

});

export const {

  loginSuccess,
  adminLogin,
  logout,
  openRegister,
  closeRegister,closeLogin

} = authSlice.actions;

export default authSlice.reducer;