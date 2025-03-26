import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CreateProfileData } from '@/types'

const initialState: Omit<CreateProfileData, 'name' | 'phone' | 'password'> = {
  email: '',
  message: null,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (
      state,
      action: PayloadAction<
        Omit<CreateProfileData, 'name' | 'phone' | 'password'>
      >
    ) => {
      state.email = action.payload.email
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload
    },
  },
})

export const { setProfileData, setMessage } = profileSlice.actions
export default profileSlice.reducer
