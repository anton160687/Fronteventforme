import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { User } from '@/types/user';
import { getUserInfo } from './userAPI';

type UserState = {
  userData: User;
  isAuth: boolean;
  status: 'idle' | 'loading' | 'failed';
};

const initialState: UserState = {
  userData: {
    id: 0,
    username: '',
    first_name: '',
    last_name: '',
    is_bride: false,
    email: '',
    phone: ''
  },
  isAuth: false,
  status: 'idle',
};

export const fetchUserDataWithThunk = createAsyncThunk('user/fetchUserData',
  async () => {
    const response = await getUserInfo();
    return response;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth: (state, action: {
      payload: boolean;
      type: string;
    }) => {
      state.isAuth = action.payload
    },
    setRole: (state: UserState, action: {
      payload: boolean;
      type: string;
    }) => {
      state.userData.is_bride = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDataWithThunk.pending, (state: UserState) => {
        state.status = 'loading';
      })
      .addCase(
        fetchUserDataWithThunk.fulfilled,
        (state: UserState, action: PayloadAction<User | undefined>) => {
          state.status = 'idle';
          if (action.payload) {
            state.userData = {...state.userData, ...action.payload};
            state.isAuth = true;
          }
        }
      )
      .addCase(fetchUserDataWithThunk.rejected, (state: UserState) => {
        state.status = 'failed';
        state.isAuth = false;
      });
  },
});

export const { setAuth, setRole } = userSlice.actions;
//кастомный селект
export const selectUser = (state: RootState) => state.user.userData;
export const selectUserReqStatus = (state: RootState) => state.user.status;
export const selectIsAuth = (state: RootState) => state.user.isAuth;

//userReducer
export default userSlice.reducer;