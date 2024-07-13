//------------------------------ MODULE --------------------------------
import React from 'react';
import {
	Image
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styled from '@emotion/native';
import { APP_TITLE } from '@/config/auth';
import { RootStackParamList } from 'Router';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

//---------------------------- COMPONENT -------------------------------
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OnBoarding'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'OnBoarding'>;

type Props = {
	navigation: HomeScreenNavigationProp;
	route: HomeScreenRouteProp;
};

const OnboardingScreen = ({navigation} : Props) => {
    return (
		<Onboarding
			//SkipButtonComponent={Skip}
			//NextButtonComponent={Next}
			//DoneButtonComponent={Done}
			//DotComponent={Dots}
			//bottomBarColor='#fff'
			//onSkip={() => navigation.replace("Login")}
			//onDone={() => navigation.navigate("Login")}
			pages={[
				{
					backgroundColor: 'red',
					image: <Image />,
					title: 'Connect to the World',
					subtitle: 'A New Way To Connect With The World',
				},
				{
					backgroundColor: 'orange',
					image: <Image />,
					title: 'Share Your Favorites',
					subtitle: 'Share Your Thoughts With Similar Kind of People',
				},
				{
					backgroundColor: 'blue',
					image: <Image />,
					title: 'Become The Star',
					subtitle: "Let The Spot Light Capture You",
				},
			]}
		/>
    );
};

export default OnboardingScreen;

//------------------------------ STYLE ---------------------------------
const Container = styled.View`
	flex: 1;
	background-color: #fff;
	align-items: center;
	justify-content: center;
`;
const Title = styled.Text`
	
`;