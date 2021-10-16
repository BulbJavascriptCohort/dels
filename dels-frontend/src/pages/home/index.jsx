import React from "react";
import { Section } from "./home.style";
import photo from '../../assets/images/character.svg';
function HomeSection() {
    return (
			<Section>
				<div className="container">
					<div className="home_content">
						<p>YOUR DELIVERY<br/>PARTNER AT<br/> YOUR DOORSTEP</p>
						<button>REQUEST FOR PICKUP</button>
					</div>
					<div className="home_image">
						<img src={photo} />
					</div>
				</div>
			</Section>
		);
}
export default HomeSection