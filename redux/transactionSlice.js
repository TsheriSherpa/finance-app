import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit';

var initialState = [
	{ id: 1, title: "Transaction 1", amount: "10.0", address: "141 Lyman St, London, ON"},
	{ id: 2, title: "Transaction 2", amount: "12.0", address: "141 Lyman St, London, ON"},
	{ id: 3, title: "Transaction 3", amount: "13.0", address: "141 Lyman St, London, ON"},
	{ id: 4, title: "Transaction 4", amount: "14.0", address: "141 Lyman St, London, ON"},
	{ id: 5, title: "Transaction 5", amount: "15.0", address: "141 Lyman St, London, ON"},
]

export const transactionSlice = createSlice({
	name: 'transaction',
	initialState: initialState,
	reducers: {

	},
})

export const selectTotalAmount = (state) => state.transaction.reduce((total, { amount }) => total + parseFloat(amount), 0);
export const selectTotalTransactions = (state) => state.transaction.length;

export const selectHighestSpending = createSelector(
	state => state.transaction,
	transactions => {
		if (transactions.length === 0) return null;
		return transactions.reduce((max, current) => {
			return parseFloat(current.amount) > parseFloat(max.amount) ? current : max;
		});
	}
);

export const selectLeastAmountTransaction = createSelector(
	state => state.transaction,
	transactions => {
		if (transactions.length === 0) return null;
		return transactions.reduce((min, current) => {
			return parseFloat(current.amount) < parseFloat(min.amount) ? current : min;
		});
	}
);


export default transactionSlice.reducer