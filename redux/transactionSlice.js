import { createSlice } from '@reduxjs/toolkit'
var initialState = [
	{id: 1, title: "Transaction 1", amount: "10.0"},
	{id: 2, title: "Transaction 2", amount: "12.0"},
	{id: 3, title: "Transaction 3", amount: "13.0"},
	{id: 4, title: "Transaction 4", amount: "14.0"},
	{id: 5, title: "Transaction 5", amount: "15.0"},
]

export const transactionSlice = createSlice({
	name: 'transaction',
	initialState: initialState,
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		},
	},
})


export const { increment, decrement, incrementByAmount } = transactionSlice.actions

export default transactionSlice.reducer