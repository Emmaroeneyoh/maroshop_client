import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const url = 'https://emmaroempire.com/server'

const initialState = {
    category:[],
    products:[],
    product:{},
    success : false,
    loading:'',
    error: '',

}

//function to get product
export const Singleproduct = createAsyncThunk(
    'singleproduct',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/product/${values}`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)


//fucntion to get product by type
export const GetProduct = createAsyncThunk(
    'getproduct',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/product`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//fucntion to get product by type
export const GetProductType = createAsyncThunk(
    'getproducttype',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/product/type?type="${values}"`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)


//fucntion to get product by type
export const GetProductCategory = createAsyncThunk(
    'getproductcategory',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/product/category?category="${values}"`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//fucntion for signup
export const GetCategories = createAsyncThunk(
    'Getcategories',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/category`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

// for type and color/size 
export const GetProducttypeSize = createAsyncThunk(
    'GetProducttypeSize',
    async (values, { rejectWithValue }) => {
        try {
            const {type, size} = values
            const token = await axios.get(`${url}/product/type?type="${type}"&size="${size}"`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)


const adminslice = createSlice({
    name:"product",
    initialState,
    reducers:{
        productReset:(state) => {
         state.error =""
         state.loading = ''
         state.success = false
        },
       
        clearadminError: (state) => {
            state.user = ''
        }
    },
    extraReducers: (builder) => {
        builder
            //for signup
        .addCase(Singleproduct.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(Singleproduct.fulfilled, (state,action) => {
            state.loading = 'success'
            state.product = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(Singleproduct.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
            //for signin
        .addCase(GetProduct.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(GetProduct.fulfilled, (state,action) => {
            state.loading = 'success'
            state.products = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(GetProduct.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
            //for signin
        .addCase(GetProductType.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(GetProductType.fulfilled, (state,action) => {
            state.loading = 'success'
            state.products = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(GetProductType.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
            //for getting all admins
        .addCase(GetProductCategory.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(GetProductCategory.fulfilled, (state,action) => {
            state.loading = 'success'
            state.products = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(GetProductCategory.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
            //for getting all admins
        .addCase(GetProducttypeSize.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(GetProducttypeSize.fulfilled, (state,action) => {
            state.loading = 'success'
            state.products = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(GetProducttypeSize.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
       
            //for getting all admins
        .addCase(GetCategories.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(GetCategories.fulfilled, (state,action) => {
            state.loading = 'success'
            state.category = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(GetCategories.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
       
           
          
          
    }
})

export default adminslice.reducer
export const {adminSignupReset} = adminslice.actions