import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataLayer } from './dataLayer';
import reducer, { initialState } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
	<DataLayer initialState={ initialState } reducer={ reducer }>
			<App />
		</DataLayer>
	</React.StrictMode>
);

reportWebVitals();
