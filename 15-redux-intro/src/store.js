import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
  reducer: {
    customer: customerReducer,
    account: accountReducer
  }
}
)

export default store;