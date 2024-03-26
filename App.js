import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux'
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import TransactionScreen from './screens/transaction';
import SummaryScreen from './screens/summary';


const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Transactions" component={TransactionScreen} />
			<Tab.Screen name="Summary" component={SummaryScreen} />
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<MyTabs />
			</NavigationContainer>
		</Provider>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
