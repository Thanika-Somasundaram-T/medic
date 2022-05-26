import React, { useEffect, useState } from 'react';
import './location.css';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { useDataLayerValue } from '../../dataLayer';
import { Autocomplete } from '@react-google-maps/api';
import { display } from '@mui/system';


const Location = () => {
	const [value, setValue]  = useState('');
	const [ state, dispatch ] = useDataLayerValue();
	const handleSelect = async (value) => {
		console.log('ppppp', value);
		const result = await geocodeByAddress(value);
		const latLng = await getLatLng(result[0]);
		console.log(result[0].address_components[0].long_name, latLng);
		dispatch({
			type: 'SET_LOCATION',
			location: result[0].address_components[0].long_name,
		});
		dispatch({
			type: 'SET_CO-ORDINATES',
			latitude: latLng.lat,
			longitude: latLng.lng,
		});
	};
	
	return (
			<div className='location-root'>
				<PlacesAutocomplete
					className='location-search'
					value={ value}
					placeholder= { value }
					onChange={ setValue }
					onSelect={handleSelect}
				>
					{ ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
						<div>
							<input className='location-search' { ...getInputProps({ placeholder: `${ state.location }` })}
							/>
							<div className='suggestion'>
								{ loading ? <div>...Loading</div>: null }
								{ suggestions.slice(0, 3).map((suggestion) => {
									const style = {
										border: '1px solid black',
										borderRadius: '10px',
										backgroundColor: 'white',
									};

									return (
										<div { ...getSuggestionItemProps(suggestion, { style })}>
											{ suggestion.description }
										</div>);
								})
								}
							</div>
						</div>)
						}
				</PlacesAutocomplete>
			</div>
	);
}

export default Location;



