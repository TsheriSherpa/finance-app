import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/listItem";
import { useSelector } from 'react-redux'
import React from 'react'

function TransactionScreen(props) {
    const transactions = useSelector((store) => store.transaction)

    return (
        <View style={styles.container}>
            <FlatList
                data={transactions}
                renderItem={({ item }) => <ListItem transaction={item} navigation={props.navigation}/>}
                keyExtractor={(item) => item.id}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    item: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
    },
  });
  
  export default TransactionScreen;