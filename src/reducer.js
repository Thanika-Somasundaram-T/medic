
export const initialState = {
	latitude: 0,
	longitude: 0,
};

const reducer = ( state, action ) => {
	switch(action.type) {
		case 'SET_CO-ORDINATES':
			return ({
				...state,
				latitude: action.latitude,
				longitude: action.longitude,
			});
		default:
			return state;  
	}
}

export default reducer;