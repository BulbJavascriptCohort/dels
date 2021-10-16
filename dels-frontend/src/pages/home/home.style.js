import styled from 'styled-components';
export const Section = styled.section`
	color: black;
	font-size: 48px;
	width: 100vw;
	max-width: 1152px;
	margin: 0 auto;
	.container {
		display: flex;
        justify-content:space-between;
        align-items:center;
        height:calc(100vh - 100px);

		.home_content {
			height: 177px;
			width: 448px;
			font-family: Montserrat;
			font-size: 48px;
			font-style: normal;
			font-weight: 700;
			line-height: 59px;
			letter-spacing: 0em;
			text-align: left;
			button {
				height: 56px;
				width: 259px;
				border-radius: none;
				padding: 17px, 24px, 17px, 24px;
				background: rgba(231, 132, 49, 1);
				font-family: Montserrat;
				font-size: 18px;
				border-style: none;
				color: white;
			}
		}
		.home_image {
			height: 398.2354736328125px;
			width: 574.7207641601562px;
		}
	}
`;
