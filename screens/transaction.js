import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, Text, ActivityIndicator, Button, Modal, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../components/listItem';
import { firebaseHelper } from '../firebase';
import { addTransaction, fetchDataSuccess } from '../redux/transactionSlice';


function TransactionScreen(props) {
	const transactions = useSelector((store) => store.transaction)
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("")
	const [modalVisible, setModalVisible] = useState(false);
	const [newTransaction, setNewTransaction] = useState({ title: '', amount: '', address: '', date: '' });


	const dispatch = useDispatch()

	useEffect(() => {
		fetchItems();
	}, [dispatch]);

	const fetchItems = async () => {
		const fetchedItems = [];
		setLoading(true)
		setError('')

		await firebaseHelper.fetchTransactions()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					var data = doc.data()
					data.id = doc.id
					fetchedItems.push(data)
				});
				dispatch(fetchDataSuccess(fetchedItems));
			})
			.catch((error) => {
				setError("Error fetching data")
			})
			.finally(() => {
				setLoading(false)
			})
	}

	const handleAddTransaction = async () => {
		try {
			// Add new transaction to Firebase and get the DocumentReference
			const docRef = await firebaseHelper.addTransaction(newTransaction);

			// Extract the document ID from the reference
			const newTransactionWithId = { id: docRef.id, ...newTransaction };
			console.log(newTransactionWithId)

			dispatch(addTransaction(newTransactionWithId))

			setModalVisible(false);
			setNewTransaction({ title: '', amount: '', address: '', date: '' });
		} catch (error) {
			console.error('Error adding transaction:', error);
		}
	};

	if (loading) {
		return <Text>Loading...</Text>;
	}

	if (transactions.length < 1) {
		return (
			<View style={styles.container}>
				<AddModal
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
					newTransaction={newTransaction}
					setNewTransaction={setNewTransaction}
					handleAddTransaction={handleAddTransaction}
				/>

				<Text>You don't have any transactions.</Text>
				<Button title="Add Transaction" onPress={() => setModalVisible(true)} />
			</View>
		)
	}

	if (error) {
		return <Text>Error: {error}</Text>;
	}

	return (
		<View style={styles.container}>
			<AddModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				newTransaction={newTransaction}
				setNewTransaction={setNewTransaction}
				handleAddTransaction={handleAddTransaction}
			/>

			<FlatList
				data={transactions}
				renderItem={({ item }) => <ListItem transaction={item} navigation={props.navigation} />}
				keyExtractor={(item) => item.id}
			/>
			<Button title="Add Transaction" onPress={() => setModalVisible(true)} />
		</View>
	);

}

const AddModal = ({ modalVisible, setModalVisible, newTransaction, setNewTransaction, handleAddTransaction }) => {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => setModalVisible(false)}
		>
			<View style={styles.modalContainer}>
				<View style={styles.modalContent}>
					<TextInput
						style={styles.input}
						placeholder="Title"
						value={newTransaction.title}
						onChangeText={(text) => setNewTransaction({ ...newTransaction, title: text })}
					/>
					<TextInput
						style={styles.input}
						placeholder="Amount"
						value={newTransaction.amount}
						onChangeText={(text) => setNewTransaction({ ...newTransaction, amount: text })}
						keyboardType="numeric"
					/>
					<TextInput
						style={styles.input}
						placeholder="Address"
						value={newTransaction.address}
						onChangeText={(text) => setNewTransaction({ ...newTransaction, address: text })}
					/>
					<TextInput
						style={styles.input}
						placeholder="Date"
						value={newTransaction.date}
						onChangeText={(text) => setNewTransaction({ ...newTransaction, date: text })}
					/>
					<Button title="Save" onPress={handleAddTransaction} />
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 10,
		width: '80%',
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
});


export default TransactionScreen;