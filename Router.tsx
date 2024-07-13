//------------------------------ MODULE --------------------------------
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //setting after
import { createDrawerNavigator } from '@react-navigation/drawer'; //setting after
import { 
	Main, 
	Login, 
	MyPage,
	OnBoarding
} from '@/pages';

//---------------------------- COMPONENT -------------------------------
export type RootStackParamList = {
	Main: undefined;
	Login: { itemId: number; otherParam?: string };
	OnBoarding: undefined;
	MyPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Main">
				<Stack.Screen name="Main" component={Main} />
				<Stack.Screen name="OnBoarding" component={OnBoarding} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="MyPage" component={MyPage} />
			</Stack.Navigator>			
		</NavigationContainer>
	)
}