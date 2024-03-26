import { Text, View } from "react-native";

export default function TransactionDetailScreen({ route }) {
    const { title, amount, address } = route.params
    return (
        <View>
            <Text>{title}</Text>
            <Text>Amount: {amount}</Text>
            <Text>Address: {address}</Text>
        </View>
    );
}