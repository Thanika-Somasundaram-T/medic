import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import Display from './components/display/display';
import Maps from './components/maps/maps';
import { useDataLayerValue } from './dataLayer';
import { useJsApiLoader } from '@react-google-maps/api';
import { Axios } from 'axios';
// import co

var axios = require('axios');
var cors = require('cors');


// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=hospital&key=AIzaSyBZ0SmSKra8deD2NxtWbjPtCz2epx-8tGs

function App() {
	const [ state, dispatch ] = useDataLayerValue();
	const lat= state.latitude;                   //13.0499711;
	const lng = state.longitude;                 //80.2121306;
	const dLat = state.dLat;
	const dLng = state.dLng;

	var configPlaces = {
		method: 'get',
		url: `place/nearbysearch/json?location=${lat}%2C${lng}&radius=50000&type=hospital&key=AIzaSyBxaLtbFPhxm_tinXBiwH-YPoCF7VKt_5M`,
		headers: { "Access-Control-Allow-Origin": "*" },
	};

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyBxaLtbFPhxm_tinXBiwH-YPoCF7VKt_5M',
		libraries: ['places'],
	});

	useEffect(() => {
		axios(state.placeConfig)
		.then(function (response) {
			dispatch({
				type: 'SET_DIRECTION',
				direction: response.data,
			})
		})
		.catch(function (error) {
			console.log(error);
	});
	}, [state.placeConfig]);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => dispatch({
			type: 'SET_CO-ORDINATES',
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
		}));
	}, []);

	useEffect(() => {
		axios(configPlaces)
		.then(function (response) {
			dispatch({
				type: 'SET_NEAR_BY_HOSPITALS',
				nearByHospitals: response.data.results,
			});
			})
		.catch(function (error) {
			console.log(error);
		});
	}, [state.latitude, state.longitude]);

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
