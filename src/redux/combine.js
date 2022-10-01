import { combineReducers } from "redux";

import user from './auth'
import product from './product'
import cart from './carte'
import invoice from './fund'


const root = combineReducers({
    user: user,
    product: product, 
    invoice:invoice,
    cart:cart
   
})

export default root