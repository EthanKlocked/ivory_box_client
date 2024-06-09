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

//---------------------------- COMPONENT -------------------------------
const App = (): React.JSX.Element => {
	return (
		<RecoilRoot>
			<Main/>
			<Test/>
		</RecoilRoot>
	);
};
export default App;