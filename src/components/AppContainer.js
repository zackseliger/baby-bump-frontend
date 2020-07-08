import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';

function AppContainer() {
	return(
		<div id="app-container">
			<Route path="/app/dashboard"><Dashboard/></Route>
		</div>
	);
}

export default AppContainer;