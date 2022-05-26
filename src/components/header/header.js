import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';
import Search from './search';
import Location from './location';
import './header.css';

const Header = () => {
	return (
		<div className='header-root'>
			<h1 className='header-item-1'>MEDIC</h1>
			<Search className='header-item-2'/>
			<Location className='header-item-3'/>
		</div>
	);
}

export default Header;