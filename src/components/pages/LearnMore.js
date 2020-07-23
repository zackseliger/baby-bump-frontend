import React from 'react';
import { Link } from 'react-router-dom';

function LearnMore() {
	return (
		<div style={{textAlign:'center', marginTop:'50px'}}>
			<h1 style={{marginTop:'100px'}}>Introducing <span style={{fontWeight:'bold', color:'#D2A297'}}>Nona</span></h1>
			<p style={{width:'50%', marginLeft:'auto', marginRight:'10%', textAlign: 'left'}}>a tool that allows you to monitor your pregnancy remotely, so you know exactly what to expect when you’re expecting.</p>
			<img style={{position:'absolute', transform: 'scale(0.2) translate(-325%, -250%)', zIndex:'-1'}} src="/image/logo.jpg"/>

			<div style={{background:'#BFBAB0', padding:'20px', borderRadius: '0px 50px 0px 0px', marginTop:'200px'}}>
				<h2 style={{color:'#FFF', marginTop:'0'}}>Sign up to use Nona. It's free!</h2>
				<Link to="/signup"><button style={{background:'#3D6053'}}>get started</button></Link>
			</div>

			<div style={{textAlign:'left'}} className="home-section">
				<p>
					<h2 style={{marginTop:'50px'}}>What is Nona?</h2>
					<p>Nona is a service that empowers expecting mothers to consistently monitor their pregnancy progress.</p>
				</p>

				<p>
					<h2>Why Nona?</h2>
					<p>Currently, 1 in 7 mothers do not receive appropriate prenatal care during their pregnancy. Rural, low income, and minority mothers are disproportionately more likely to have limited access to prenatal care, resulting in higher infant mortality rates among these populations. Covid-19 only exacerbates these challenges for pregnant women, as healthcare providers are scaling back in person visits at this time, and limiting partners from joining mothers on visits. We believe Nona can bridge the gap between the needs of pregnant mothers and the limited availability of healthcare.</p>
				</p>

				<p>
					<h2>Who can use Nona?</h2>
					<p>Any expecting mother can use Nona -- it’s our commitment to addressing inequity in prenatal healthcare. We also offer integration services for healthcare practices. Heatlhcare professionals that integrate Nona into their practice can use the tool to reduce in-person prenatal visits and reduce the risk of exposure to Covid-19, without sacrificing patient engagement, satisfaction, and safety.</p>
				</p>

				<p>
					<h2>What can I track with Nona?</h2>
					<p>Currently, patients can track vitals including blood pressure, weight change, anxiety, kicks, and fetal heart tones. We let you know if these metrics are within medically acceptable ranges. Additionally, expecting mothers can journal their experience to capture qualitative data including cravings, symptoms, mood, highlights, and comments for physicians.</p>
				</p>

				<p>
					<h2>Can I share my pregnancy information with other?</h2>
					<p>Yes! A distinct feature of Nona is your ability to share information with a patient advocate such as a spouse or partner, as well as healthcare providers.</p>
				</p>

				<p>
					<h2>How much does Nona cost?</h2>
					<p>Nona is free for pregnant women, forever. We do charge a nominal fee for healthcare professionals who wish to integrate Nona into their practice. This fee covers integration of Nona’s patient monitoring capabilties with the healthcare provider’s other technology solutions, including technologies like email and telehealth video. Nona also offers healthcare providers telemonitoring equipment including blood pressure cuffs, scales, and fetal heart tone monitors at an additional cost.</p>
				</p>

				<p>
					<h2>Is my data secure with Nona?</h2>
					<p>Absolutely. All data is encrypted and stored securely. Our security practices are aligned with best practices for storing personally identifiable information health information protected by HIPAA laws. We never share your data without your permission, and you can request to delete your data at any time.</p>
				</p>

				<p>
					<h2>What improvements can I expect with Nona in the future?</h2>
					<p>Currently, Nona is in the early stages of development. We do expect to offer additional capabilities in the future. For expecting mothers and patient advocates, we expect to integrate additional resources that can help prepare you for baby’s arrival. We also expect to provide post-partum support and tracking. Lastly, we anticipate offering a comprehensive report that summarizes the entirety of a mother’s pregnancy experience. This can be downloaded and saved as a keepsake or reference for future pregnancy planning.</p>
					<p>For healthcare providers, we expect to offer new dashboards containing aggregated patient data, which may help address needs related to your specific practice.</p>
				</p>
			</div>
		</div>
	)
}

export default LearnMore;