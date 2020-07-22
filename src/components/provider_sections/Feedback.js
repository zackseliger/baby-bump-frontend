import React from 'react';
import { useHistory } from "react-router-dom";

function Feedback() {
	const history = useHistory();

	function submit(e) {
		e.preventDefault();
		history.push("/provider/patients");
	}

	return (
		<div style={{padding:'50px 100px'}}>
			<h1 style={{fontWeight:'normal', marginBottom:'0'}}>Feedback</h1>
			<p style={{marginTop:'0', fontSize:'23px'}}>Let us know how we can do a better job.</p>

			<form onSubmit={submit}>
				<textarea style={{width:'50%',height:'125px'}} placeholder={"write your feedback here..."}></textarea><br/>
				<button style={{marginTop:'20px'}}>submit</button>
			</form>
		</div>
	);
}

export default Feedback;