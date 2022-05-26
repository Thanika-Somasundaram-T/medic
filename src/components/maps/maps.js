import React, { useMemo } from 'react';
import './maps.css';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useDataLayerValue } from '../../dataLayer';

const Maps = () => {
	const [ state ] = useDataLayerValue();
	const center = { lat: state.latitude, lng: state.longitude };
	return (
			<div className='map-root'>
				<div className='map'>
					<GoogleMap
						zoom={ 14 }
						center={ center }
						mapContainerClassName='map'
					>
						<Marker position={ center }/>
					</GoogleMap>
				</div>
			</div>
	);
}

export default Maps;