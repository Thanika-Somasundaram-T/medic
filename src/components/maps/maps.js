import React, { useMemo, useState } from 'react';
import './maps.css';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useDataLayerValue } from '../../dataLayer';

const Maps = () => {
	const [map, setMap] = useState('');
	const [ state ] = useDataLayerValue();
	const center = { lat: state.latitude, lng: state.longitude };
	return (
			<div className='map-root'>
					<GoogleMap
						zoom={ 14 }
						center={ center }
						mapContainerClassName='map'
						options={''}
						onLoad={(map) => setTimeout(() => setMap(map)) }
					>
						{ map && <Marker position={ center }/> }
					</GoogleMap>
			</div>
	);
}

export default Maps;