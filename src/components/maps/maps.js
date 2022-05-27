// eslint-disable-file no-use-before-define 
import React, { useState } from 'react';
import './maps.css';
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer, DirectionsService, TravelMode } from '@react-google-maps/api';
import { useDataLayerValue } from '../../dataLayer';
import Directions from './directions';

const Maps = () => {
	const [map, setMap] = useState('');
	const [ state ] = useDataLayerValue();
	const [DirectionResponse, setDirectionResponse] = useState(null);
	const [distance, setDistance] = useState('');
	const [duration, setDuration] = useState('');
	const destination= { lat: 10.345, lng: 56.78 }
	const origin = { lat: 21.23, lng: 67.45 }

	const center = { lat: state.latitude, lng: state.longitude };

	return (
			<div className='map-root'>
				<GoogleMap
						zoom={ 15 }
						center={ center }
						mapContainerClassName='map'
						onLoad={(map) => setTimeout(() => setMap(map)) }
					>
					{ map &&
						state.nearByHospitals.map(({ geometry }) => <Marker position={ geometry.location }/>) }
					</GoogleMap>
			</div>
	);
}

export default Maps;