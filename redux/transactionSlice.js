import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit';

var initialState = [
	{ id: 2, title: "Walmart", amount: "12.00", address: "141 Lyman St, London, ON", date: "11 March, 2024"},
	{ id: 3, title: "Tim Hortons", amount: "13.00", address: "141 Horton St, London, ON", date: "12 March, 2024"},
	{ id: 1, title: "Turtle Jacks", amount: "10.00", address: "141 Oxford St, London, ON", date: "13 March, 2024"},
	{ id: 4, title: "Food Basic", amount: "14.00", address: "141 McNay St, London, ON", date: "14 March, 2024"},
	{ id: 5, title: "Circle K", amount: "15.00", address: "141 Victoria St, London, ON", date: "15 March, 2024"},
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