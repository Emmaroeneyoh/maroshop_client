import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const url = 'https://emmaroempire.com/server'

const initialState = {
    invoice : {},
    success : false,
    loading:'',
    error: '',

}



//fucntion for signup
export const Payfund = createAsyncThunk(
    'addfund',
    async (  values, { rejectWithValue }, ) => {
        try {
            const {id, fund, transaction_id , tx_ref  , cart, cartPrice, cartTotal } = values
            const token = await axios.post(`${url}/payment/${id}`, { 
                 transaction_id , tx_ref , cart, cartPrice, cartTotal
            })
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)






const adminslice = createSlice({
    name:"adminsignin",
    initialState,
    reducers:{
        adminSignupReset:(state) => {
         state.error =""
         state.loading = ''
         state.success = false
        },
       
        
    },
    extraReducers: (builder) => {
        builder
            //for signup
        .addCase(Payfund.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(Payfund.fulfilled, (state,action) => {
            state.loading = 'success'
            state.invoice = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(Payfund.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            alert(action.payload)
            state.success = false
            
        })
        
          
    }
})

export default adminslice.reducer
export const {adminSignupReset} = adminslice.actions