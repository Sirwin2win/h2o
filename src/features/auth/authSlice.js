import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'https://api.buywaterh2o.com/api/auth' 

// Get user from localStorage
const person = localStorage.getItem('user')
const user = JSON.parse(person)

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
    user: null,
    token: localStorage.getItem('token') || null,
    status: 'idle',
    error: null,
  },
  reducers: {},
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
        state.user = action.payload.user
        state.token = action.payload.token
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

export default authSlice.reducer
