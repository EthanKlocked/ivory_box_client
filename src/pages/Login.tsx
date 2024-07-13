//------------------------------ MODULE --------------------------------
import React from 'react';
import {
	View,
	Text
} from 'react-native';
import styled from '@emotion/native';
import { APP_TITLE } from '@/config/auth';

//---------------------------- COMPONENT -------------------------------
const Login = () => {
	return (
		<Container>
			<View>
				<Title>{APP_TITLE}</Title>
			</View>
		</Container>
	);
};
export default Login;

//------------------------------ STYLE ---------------------------------
const Container = styled.View`
	flex: 1;
	background-color: #fff;
	align-items: center;
	justify-content: center;
`;
const Title = styled.Text`
	
`;