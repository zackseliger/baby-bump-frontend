import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
	return (
		<div style={{textAlign: "center", marginTop: '50px'}}>
			<h1 style={{marginTop:'100px'}}>Introducing <span style={{fontWeight:'bold', color:'#D2A297'}}>Nona</span></h1>
			<p style={{width:'50%', marginLeft:'auto', marginRight:'10%', textAlign: 'left'}}>a tool that allows you to monitor your pregnancy remotely, so you know exactly what to expect when you’re expecting.</p>
			<img style={{position:'absolute', transform: 'scale(0.2) translate(-325%, -250%)', zIndex:'-1'}} src="/image/logo.jpg"/>

			<div style={{background:'#BFBAB0', padding:'20px', borderRadius: '0px 50px 0px 0px', marginTop:'200px'}}>
				<h2 style={{color:'#FFF', marginTop:'0'}}>Sign up to use Nona. It's free!</h2>
				<Link to="/signup"><button style={{background:'#3D6053'}}>get started</button></Link>
			</div>

			<div className="home-section">
				<h2>track your vitals</h2>
				<div style={{position:'relative'}}>
					<img src="/image/home/track.png"/>
					<img style={{position:'absolute', width:'20%', top:'-10%', right:'5%'}} src="/image/home/track-mini.png"/>
				</div>

				<h2>log your experience</h2>
				<div style={{position:'relative'}}>
					<img src="/image/home/log.png"/>
					<img style={{position:'absolute', width:'20%', bottom:'5%', left:'5%'}} src="/image/home/log-mini.png"/>
				</div>

				<h2>share with your partner or physician</h2>
				<img src="/image/home/share.png"/>
			</div>
		</div>
	);
}

export default Homepage;