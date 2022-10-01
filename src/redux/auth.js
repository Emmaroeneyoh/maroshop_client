import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const url = 'https://emmaroempire.com/server'

const initialState = {
    user : {},
    success : false,
    loading:'',
    error: '',

}

//fucntion for signup
export const userSignup = createAsyncThunk(
    'usersignup',
    async (values, { rejectWithValue }) => {
        console.log('this is values : ', values)
        try {
            const token = await axios({
                method: "post",
                url: `${url}/user/signup`,
                data: values,
                headers: { "Content-Type": "multipart/form-data" },
              });



            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)
//fucntion for signup
export const userSignin = createAsyncThunk(
    'usersignin',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.post(`${url}/user/login`, { 
                email:values.email,
                password:values.password
            })
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//fucntion for signup
export const userSignout = createAsyncThunk(
    'usersignout',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/user/logout`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//fucntion for signup
export const Singleuser = createAsyncThunk(
    'singleuser',
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.get(`${url}/user/${values}`)
            console.log(token)
            return token.data
        } catch (error) {
            console.log(error.response.data)
            return rejectWithValue(error.response.data)
        }
    }
)

//fucntion for signup
export const Updateusers = createAsyncThunk(
    'adminuser',
    async (values, { rejectWithValue }) => {
        console.log('this is values : ', values)
        try {
            const {id} = values
            const token = await axios({
                method: "put",
                url: `${url}/user/${id}`,
                data: values,
                headers: { "Content-Type": "multipart/form-data" },
              });



            // const token = await axios.post(`${url}/admin/signup`, { 
            //     username:values.username,
            //     email:values.email,
            //     password:values.password,
            //     role:values.role,
            //     phone:values.phone,
            //     address:values.address,
            //     dob: values.dob,
            //     photo:values.photo
            // })
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
       
        clearadminError: (state) => {
            state.user = ''
        }
    },
    extraReducers: (builder) => {
        builder
            //for signup
        .addCase(userSignup.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(userSignup.fulfilled, (state,action) => {
            state.loading = 'success'
            state.user = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(userSignup.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            alert(action.payload)
            state.success = false
            
        })
            //for signin
        .addCase(userSignin.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(userSignin.fulfilled, (state,action) => {
            state.loading = 'success'
            state.user = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(userSignin.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            alert(action.payload)
            state.success = false
            
        })
            //for getting all admins
        .addCase(Singleuser.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(Singleuser.fulfilled, (state,action) => {
            state.loading = 'success'
            state.user = action.payload
            state.success = true
            state.error = ''
            
        })
        .addCase(Singleuser.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
            //for getting all admins
        .addCase(userSignout.pending, (state) => {
            state.loading = 'pending'
            
        })
        .addCase(userSignout.fulfilled, (state,action) => {
            state.loading = 'success'
            state.user = {}
            state.success = true
            state.error = ''
            
        })
        .addCase(userSignout.rejected, (state, action) => {
            state.loading = 'failed'
            state.error = action.payload
            state.success = false
            
        })
       
           
          
          
    }
})

export default adminslice.reducer
export const {adminSignupReset} = adminslice.actions