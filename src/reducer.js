
export const initialState = {
	latitude: 0,
	longitude: 0,
	location: 'current Location',
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
		default:
			return state;  
	}
}

export default reducer;