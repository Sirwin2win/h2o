import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {jwtDecode} from 'jwt-decode';

const API_URL = 'https://api.buywaterh2o.com/api/auth' 

// Get user from localStorage
const token = localStorage.getItem('token');
let user = null;

if (token) {
  try {
    const decoded = jwtDecode(token);
    user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
      token,
    };
  } catch (err) {
    console.error('Invalid token', err);
  }
}

// 🔐 Register
export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password, address, phone}, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/register`, {
        name,
        email,
        password,
        address, 
        phone
      })

      // localStorage.setItem('token', res.data.token)
      // console.log(res.data)

      return res.data // { user, token }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || { message: 'Something went wrong' })

    }
  }
)

// 🔐 Login
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      // Store token (and possibly user info) in localStorage
      localStorage.setItem('token', res.data.token);

      // Optional: if your backend sends user data, store it too
      // localStorage.setItem('user', JSON.stringify(res.data.user));

      return res.data; // Should contain: { user, token }
    } catch (err) {
      // Better safe fallback error message
      return thunkAPI.rejectWithValue(
        err.response?.data || { message: 'Something went wrong. Please try again.' }
      );
    }
  }
);

// 🔓 Logout
export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('token')
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user,
    status: 'idle',
    error: null,
    initialized: false, 
  },
  reducers: {
    // setCredentials: (state, action) => {
    //   if (
    //     state.token === action.payload.token &&
    //     JSON.stringify(state.user) === JSON.stringify(action.payload.user)
    //   ) {
    //     return; // 🔒 Avoid unnecessary update
    //   }
    //   state.token = action.payload.token;
    //   state.user = action.payload.user;
    // }
    // setCredentials: (state, action) => {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.initialized = true;
    // },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(register.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload?.message || 'Registration failed'
      })
      // Login
      .addCase(login.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // state.user = action.payload.user
        // state.token = action.payload.token
         const { token } = action.payload;
           try {
        const decoded = jwtDecode(token);
        state.user = {
          id: decoded.id,
          email: decoded.email,
          role: decoded.role,
          token,
        };
        localStorage.setItem('token', token);
      } catch (err) {
        console.error('Token decode failed:', err);
      }
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload?.message || 'Login failed'
      })
      // Logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        state.token = null
        state.status = 'idle'
      })
  },
})
export const { setCredentials } = authSlice.actions;
export default authSlice.reducer
