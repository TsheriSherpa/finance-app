import { View, Text, StyleSheet } from "react-native";

export default function ListItem(props) {
    return (
        <View style={styles.container}>
            <Text>{props.title}</Text>
            <View style={styles.clickable}>
                <Text>{props.amount}</Text>
                <Text> {">"} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    clickable: {
        flex: 1,
        flexDirection: "row"
    }
})