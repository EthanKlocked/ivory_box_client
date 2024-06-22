//------------------------------ MODULE --------------------------------
import React from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';
import styled from '@emotion/native';
import { RootStackParamList } from 'Router';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

//---------------------------- COMPONENT -------------------------------
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Main'>;

type Props = {
	navigation: HomeScreenNavigationProp;
	route: HomeScreenRouteProp;
};

const Main = ({ navigation }: Props) => {
	return (
		<Container>
			<View>
				<Title>Ivory Box Test</Title>
				<Button
        			title="Go to Login"
        			onPress={() => navigation.navigate('Login', { itemId: 86 })}
      			/>
			</View>
		</Container>
	);
};
export default Main;

//------------------------------ STYLE ---------------------------------
const Container = styled.View`
	flex: 1;
	background-color: #fff;
	align-items: center;
	justify-content: center;
`;
const Title = styled.Text`
	font-weight:bold;
	font-size:20px;
	background:coral;
	color:white;
	padding:5px;
`;