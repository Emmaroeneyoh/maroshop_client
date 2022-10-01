import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const url = 'https://emmaroempire.com/server'

const initialState = {
    cart : [],
    cartPrice: 0,
    cartTotal:0,

}

const adminslice = createSlice({
    name:"adminsignin",
    initialState,
    reducers:{
        cartReset:(state) => {
         state.cart = []
         state.cartPrice = 0
         state.cartTotal = 0
        },
        addcart: (state, action) => {
            const item = state.cart.find((e) => e._id === action.payload._id)
            if (item) {
                item.quantity += 1
            } else {
                const tempProduct = { ...action.payload, quantity: 1 }
                state.cart.push(tempProduct)
            }
        },
        increase: (state, action) => {
            const item = state.cart.find((e) => e._id === action.payload._id)
            if (item) {
                item.quantity += 1
            }
        },
        decrease: (state, action) => {
            const item = state.cart.find((e) => e._id === action.payload._id)
            if (item.quantity > 1) {
                item.quantity -= 1
            } else if (item.quantity === 1) {
                const tempCART = state.cart.filter((e) => e._id !== action.payload._id)
                console.log('ths is id :', tempCART)
                state.cart = tempCART
            }
        },
        removedetail: (state, action) => {
            const tempCART = state.cart.filter((e) => e._id !== action.payload._id)
            console.log('ths is id :', tempCART)
            state.cart = tempCART
        },
        getTotal: (state, action) => {
            let { totalPrice, totalquantity } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, quantity } = cartItem
                const subTotal = price * quantity

                cartTotal.totalPrice += subTotal
                cartTotal.totalquantity += quantity
                
                return cartTotal
            }, {
                totalPrice: 0,
                totalquantity:0
            })
            state.cartTotal = totalquantity
            state.cartPrice = totalPrice
        }
    },
    
    
})

export default adminslice.reducer
export const {cartReset, addcart,  increase, removedetail , decrease, getTotal} = adminslice.actions