import React from 'react';

function Profile() {
	return (
		<div style={{padding:'50px 100px'}}>
			<h1 style={{fontWeight:'normal', marginBottom:'0'}}>Here's your profile</h1>
			<p style={{marginTop:'0', fontSize:'23px'}}>We use this information to power your dashboard.</p>

			<div style={{display:'flex', justifyContent:'space-between'}}>
				<div style={{display:'inline-block', verticalAlign:'top'}}>
					<p className="profile-title">first name</p>
					<p>Naomi</p>

					<p className="profile-title">last name</p>
					<p>Robinson</p>

					<p className="profile-title">email</p>
					<p>naomi.robinson@email.com</p>
				</div>
				<div style={{display:'inline-block'}}>
					<p className="profile-title">due date</p>
					<p>02/10/2021</p>

					<p className="profile-title">starting weight</p>
					<p>122 lbs.</p>

					<p className="profile-title">birth date</p>
					<p>03/14/1992</p>

					<p className="profile-title">race / ethnicity</p>
					<p>African American</p>
				</div>
			</div>
		</div>
	)
}

export default Profile;