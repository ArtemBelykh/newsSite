import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AuthState {
    token: string | null
}

const initialState: AuthState = {
    token: null
}

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{token: string}>) => {
            localStorage.setItem("token", action.payload.token)
        }
    }
})

export const {setUser} = AuthSlice.actions
export default AuthSlice.reducer