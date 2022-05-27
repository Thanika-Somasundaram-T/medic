import React from 'react';
import './display.css';
import { useDataLayerValue } from '../../dataLayer';
import axios from 'axios';

const Display = () => {
	const [ state, dispatch ] = useDataLayerValue();
	const lat= state.latitude;                   //13.0499711;
	const lng = state.longitude;                 //80.2121306;
	return (
			<div className='display-root'>
				{ state.nearByHospitals.map((hospital) =>
					<div
						key={ hospital.name }
						className='display'
						onClick={() => {
								dispatch({
									type: 'SET_PLACE_CONFIG',
									url: `directions/json?origin=${lat},${lng}&destination=place_id:${hospital.place_id}&key=AIzaSyBxaLtbFPhxm_tinXBiwH-YPoCF7VKt_5M`,
								})
						}}
					>
						
						{ hospital.name }
					</div>)}
			</div>
	);
}

export default Display;