import React from 'react';
import './App.css';
import Header from './components/header/header';
import Display from './components/display/display';
import Maps from './components/maps/maps';
import { Grid, CssBaseline } from '@mui/material';
import { useDataLayerValue } from './dataLayer';

function App() {
	const [ state, dispatch ] = useDataLayerValue();
	return (
		<div className="App">
			<CssBaseline />
			<Header/>
			<Display/>
			<Maps/>
		</div>
	);
}

export default App;
