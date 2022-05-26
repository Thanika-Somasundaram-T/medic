
export const initialState = {
sayHi: 'hiContext Api'
};

const reducer = ( state, action ) => {
	switch(action.type) {
		case 'SET_OPTION':
			return ({
				...state,
				option: action.option,
			});
		default:
			return state;  
	}
}

export default reducer;