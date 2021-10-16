import styled from "styled-components";
export const NavWrapper = styled.nav`
	background-color: whitesmoke;
	height: 100px;
	width: 100vw;
	color: black;
	.dels_work {
		display: flex;
		width: 100%;
		font-size: 11px;
		max-width: 1152px;
		margin: 0 auto;
		height: 100px;
		justify-content: space-between;
		align-items: center;

		.logo {
			height: 26px;
			width: 126px;

			img {
				height: 100%;
				width: 100%;
			}
		}
		.nav_menu {
			display: flex;
			justify-content: space-between;
            align-items: center;
			height: 21px;
			width: 562px;

			.login {
				border-radius: 20px;
				background-color: orange;
				color: white;
				border-style: none;
				width: 88px;
				height: 21px;

				font-size: 11px;
				font-style: normal;
				font-weight: 700;
				line-height: 13px;
				letter-spacing: 0em;
			}
		}
	}
`;