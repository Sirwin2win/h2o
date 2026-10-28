
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_URL = "https://api2.buywaterh2o.com/api/auth";

// ==========================================
// INITIAL USER FROM LOCAL STORAGE
// ==========================================
const getInitialUser = () => {
  if (typeof localStorage === "undefined") return null;

  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    const decoded = jwtDecode(token);

    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      return null;
    }

    return {
      id: decoded.id,
      email: decoded.email,
      roles: decoded.roles || (decoded.role ? [decoded.role] : []),
      token,
    };
  } catch (err) {
    console.error("Invalid token:", err);
    localStorage.removeItem("token");
    return null;
  }
};


// ==========================================
// FETCH ALL USERS (ADMIN ONLY)
// ==========================================
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(`${API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.users;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || err.message
      );
    }
  }
);


// ==========================================
// DELETE USER ACCOUNT
// ==========================================
export const deleteMe = createAsyncThunk(
  "users/deleteMe",
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || err.message
      );
    }
  }
);


// ==========================================
// UPDATE USER ROLE
// ==========================================
export const updateRole = createAsyncThunk(
  "users/updateRole",
  async ({ id, role }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `${API_URL}/update-role`,
        { id, role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return {
        id,
        role,
        ...response.data,
      };
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || err.message
      );
    }
  }
);


// ==========================================
// REGISTER
// ==========================================
export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password, address, phone }, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        name,
        email,
        password,
        address,
        phone,
      });

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || {
          message: "Something went wrong",
        }
      );
    }
  }
);


// ==========================================
// LOGIN
// ==========================================
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        err.response?.data || {
          message: "Something went wrong. Please try again.",
        }
      );
    }
  }
);


// ==========================================
// LOGOUT
// ==========================================
export const logout = createAsyncThunk(
  "auth/logout",
  async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
);


// ==========================================
// AUTH SLICE
// ==========================================
const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: getInitialUser(),
    token:
      typeof localStorage !== "undefined"
        ? localStorage.getItem("token")
        : null,
    users: [],
    status: "idle",
    RegStatus: "idle",
    error: null,
    initialized: true,
  },

  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.initialized = true;
    },
  },

  extraReducers: (builder) => {
    builder

      // FETCH USERS
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload || [];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // UPDATE ROLE
      .addCase(updateRole.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateRole.fulfilled, (state, action) => {
        state.status = "succeeded";

        const updatedUser = action.payload;
        const index = state.users.findIndex(
          (user) => String(user.id) === String(updatedUser.id)
        );

        if (index !== -1) {
          state.users[index] = {
            ...state.users[index],
            ...updatedUser,
          };
        }
      })
      .addCase(updateRole.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // REGISTER
      .addCase(register.pending, (state) => {
        state.RegStatus = "loading";
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.RegStatus = "succeeded";
      })
      .addCase(register.rejected, (state, action) => {
        state.RegStatus = "failed";
        state.error =
          action.payload?.message || "Registration failed";
      })

      // LOGIN
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";

        const { token, user } = action.payload;

        state.token = token;

        try {
          const decoded = jwtDecode(token);

          state.user = {
            ...(user || {}),
            id: user?.id ?? decoded.id,
            email: user?.email ?? decoded.email,
            roles:
              user?.roles ||
              decoded.roles ||
              (decoded.role ? [decoded.role] : []),
            token,
          };

          state.initialized = true;
        } catch (err) {
          console.error("Token decode failed:", err);
          state.error = "Unable to decode login token";
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Login failed";
      })

      // LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.users = [];
        state.status = "idle";
        state.error = null;
      })

      // DELETE USER
      .addCase(deleteMe.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteMe.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.users = state.users.filter(
          (user) => String(user.id) !== String(action.payload)
        );

        if (
          state.user &&
          String(state.user.id) === String(action.payload)
        ) {
          state.user = null;
          state.token = null;
          localStorage.removeItem("token");
        }
      })
      .addCase(deleteMe.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload?.message ||
          action.payload ||
          "Something went wrong";
      });
  },
});

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;
