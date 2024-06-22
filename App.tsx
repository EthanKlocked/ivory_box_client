/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
//------------------------------ MODULE --------------------------------
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Main } from '@/pages';
import { Test } from '@/components';
import Router from './Router';

//---------------------------- COMPONENT -------------------------------
const App = (): React.JSX.Element => {
	return (
		<RecoilRoot>
			<Router/>
		</RecoilRoot>
	);
};
export default App;