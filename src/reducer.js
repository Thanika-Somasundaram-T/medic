
export const initialState = {
	latitude: 0,
	longitude: 0,
	location: 'current Location',
	direction: undefined,
	dLat: 0,
	dLng: 0,
	nearByHospitals: [],
	url: '',
	placeConfig: {
		method: 'get',
		url: ``,
		headers: { "Access-Control-Allow-Origin": "*" },
	}
};

const reducer = ( state, action ) => {
	switch(action.type) {
		case 'SET_CO-ORDINATES':
			return ({
				...state,
				latitude: action.latitude,
				longitude: action.longitude,
			});
		case 'SET_LOCATION':
			return ({
				...state,
				location: action.location,
			});
		case 'SET_NEAR_BY_HOSPITALS':
			return ({
				...state,
				nearByHospitals: action.nearByHospitals,
			});
		case 'SET_DIRECTION':
			return ({
				...state,
				direction: action.direction,
			});
		case 'SET_PLACE_CONFIG':
			return ({
				...state,
				url: action.url,
				placeConfig: {
					...state.playConfig,
					url: action.url,
				},
			});
		default:
			return state;  
	}
}

export default reducer;