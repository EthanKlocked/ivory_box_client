//------------------------------ MODULE --------------------------------
import React from 'react';
import {
	View,
	Text
} from 'react-native';
import styled from '@emotion/native';

//---------------------------- COMPONENT -------------------------------
const Main = () => {
	return (
		<Container>
			<View>
				<Title>Ivory Box</Title>
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