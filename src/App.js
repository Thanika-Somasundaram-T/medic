import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import Display from './components/display/display';
import Maps from './components/maps/maps';
import { useDataLayerValue } from './dataLayer';
import { useJsApiLoader } from '@react-google-maps/api';

function App() {
	const [ state, dispatch ] = useDataLayerValue();
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => dispatch({
			type: 'SET_CO-ORDINATES',
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
		}));
	}, []);

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyBZ0SmSKra8deD2NxtWbjPtCz2epx-8tGs',
		libraries: ['places'],
	});
	if (!isLoaded) return <div>Loading...</div>
	console.log(state);
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
