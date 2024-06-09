//------------------------------ MODULE --------------------------------
import React from 'react';
import {
	View,
	Text
} from 'react-native';
import styled from '@emotion/native';

//---------------------------- COMPONENT -------------------------------
const MyPage = () => {
	return (
		<Container>
			<View>
				<Title>test</Title>
			</View>
		</Container>
	);
};
export default MyPage;

//------------------------------ STYLE ---------------------------------
const Container = styled.View`
	flex: 1;
	background-color: #fff;
	align-items: center;
	justify-content: center;
`;
const Title = styled.Text`
	
`;