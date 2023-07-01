import {createSlice,configureStore} from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name:"User",
    initialState:{open:false},
    reducers:{
        toggle(state){
            state.open =! state.open
        }
    }
})
export const UserAction = UserSlice.actions;

const checkedGiftSlice = createSlice({
    name:"Checked",
    initialState:{open:false},
    reducers:{
        toggle(state){
            state.open =!state.open
        }
    }
})

export const checkedGiftAction = checkedGiftSlice.actions

const SnackerSlice = createSlice({
   name:"Snacker",
   initialState:{open:false},
   reducers:{
    toggle(state){
        state.open =! state.open
    }
   }
})

export const SnackerAction = SnackerSlice.actions

const CartSlice = createSlice({
    name:"Cart",
    initialState:{length:0},
    reducers:{
    setLength(state,action){
        state.length = action.payload
    }
    }
 })
 export const CartAction = CartSlice.actions
 
const store = configureStore({
    reducer:{
        User:UserSlice.reducer,
        Checked:checkedGiftSlice.reducer,
        Snacker:SnackerSlice.reducer,
        Cart:CartSlice.reducer
    }
})

export default store