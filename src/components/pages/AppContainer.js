import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../app_sections/Dashboard';
import Share from '../app_sections/Share';

function AppContainer() {
	return(
		<div id="app-container">
			<Route path="/app/dashboard"><Dashboard/></Route>
			<Route path="/app/share"><Share/></Route>
		</div>
	);
}

export default AppContainer;