import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { User } from '@/types/user';
import { fetchAllUsers } from './userAPI';


type UserState = {
  userList: User[],
  status: 'idle' | 'loading' | 'failed',
  value: number;
}

const initialState: UserState = {
  userList: [],
  status: 'idle',
  value: 0,
};

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async () => {
    const response = await fetchAllUsers();
    return response;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setValue(state, action) {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state: UserState) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state: UserState, action: PayloadAction<User[] | undefined>) => {
        state.status = 'idle';
        if (action.payload) {
          state.userList = [...action.payload];
        }
      })
      .addCase(fetchUsers.rejected, (state: UserState) => {
        state.status = 'failed';
      })
  },
});

export const { setValue } = userSlice.actions;
//кастомный селект
export const selectValue = (state: RootState) => state.user.value;
export const selectUsers = (state: RootState) => state.user.userList;
export default userSlice.reducer;