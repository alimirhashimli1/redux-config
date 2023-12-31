import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(USERS_URL);
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
