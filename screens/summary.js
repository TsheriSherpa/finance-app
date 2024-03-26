import { Text, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import { selectHighestSpending, selectLeastAmountTransaction, selectTotalAmount, selectTotalTransactions } from '../redux/transactionSlice';

export default function SummaryScreen() {

    const totalAmount = useSelector(selectTotalAmount)
    const totalTransactions = useSelector(selectTotalTransactions)
    const highestSpending = useSelector(selectHighestSpending)
    const lowestSpending = useSelector(selectLeastAmountTransaction)


    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.title}>Transactions: </Text>
                <Text>{totalTransactions}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>Balance:</Text>
                <Text>{totalAmount}</Text>
            </View>
            <View>
                <Text style={styles.subTitle}>Highest Spending:</Text>
                <View style={styles.item}>
                    <Text>{highestSpending.title}</Text>
                    <Text> ${highestSpending.amount}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.subTitle}>Lowest Spending:</Text>
                <View style={styles.item}>
                    <Text>{lowestSpending.title}</Text>
                    <Text> ${lowestSpending.amount}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontWeight: "800"
    },
    subTitle: {
        padding: 10, 
        fontWeight: 'bold', 
        color: "blue" 
    }
});
