import React from 'react';
import './header.css';

import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
export default function Header() {
	return (
		<div className="header">
			<IconButton>
				<PersonIcon fontSize="large" className="header_icon" />
			</IconButton>
			<img
				src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png"
				alt="logo"
				className="header_logo"
			/>
			<IconButton>
				<ForumIcon fontSize="large" className="header_icon" />
			</IconButton>
		</div>
	);
}
