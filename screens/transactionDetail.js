import { Text, View, StyleSheet } from "react-native";

export default function TransactionDetailScreen({ route }) {
    const { title, amount, address, date } = route.params
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.amount}>${amount}</Text>
                <Text style={{ color: 'white' }}>{title}</Text>
                <Text style={{ color: 'white' }}>{address}</Text>
            </View>
            <View style={styles.body}>
                <Text style={{ fontWeight: 'bold' }}>Transaction Date:</Text>
                <Text>{date}</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    amount: {
        fontSize: 25,
        color: 'white',
    },
    header: {
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'blue',
        fontWeight: '800',
    },
    body: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});