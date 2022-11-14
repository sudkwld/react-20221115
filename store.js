import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'Butler Stool Ladder', count: 2, price: '$251,00' },
    { id: 2, name: 'Flow Slim Armchair', count: 1, price: '$970,00' }
  ],
  reducers: {
    addCount(state, action) {
      let num = state.findIndex((a) => { return a.id === action.payload })
      state[num].count++
    },
    addItem(state, action) {
      state.push(action.payload)
    }
  }
})

export let { addCount, addItem } = cart.actions

export default configureStore({
  reducer: {
    cart: cart.reducer
  }
}) 