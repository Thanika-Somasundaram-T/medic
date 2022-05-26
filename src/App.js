import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import Display from './components/display/display';
import Maps from './components/maps/maps';
import axios from 'axios';
import { useDataLayerValue } from './dataLayer';

function App() {
	const [ state, dispatch ] = useDataLayerValue();
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => dispatch({
			type: 'SET_CO-ORDINATES',
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
		}));
	}, []);
	console.log(state)
	return (
		<div className="App">
			<Header />
			<div className='app-body'>
				<Display />
				<Maps />
			</div>
		</div>
	);
}

export default App;
