import styled from "styled-components";

export const KatacodaWrapper = styled.div`
    h1 {
        text-align: center;
        width: 70rem;
        max-width: 100%;
        margin: auto;
    }
    .join-community {
        height: 25rem;
        background: #fafafa;
        margin: auto;
    }
    .join-community_text-and_button {
        position: relative;
        top: 6.5rem;
        text-align: center;
        h1{
            margin-top: 1rem;
        }
        p{
            margin: auto;
            margin-top: 1rem;
        }
        button{
            margin-top: 1.5rem;
        }
    }
	.course-tabs {
		display: flex;
		/* border: 3px red solid; */
	}
	.course-tab-list {
		padding: 0rem;
		text-align: center;
		justify-content: center;
		width: 30%;
		/* border: 3px purple solid; */
	}
	.course-tab {
		padding: 1rem;
		text-align: center;
		width:100%;
		justify-content: center;
		/* border: 3px blue solid; */
		/* border-radius: 10px 0px 10px 0px; */
		border-bottom-right-radius: 20px;
		border-top-right-radius: 20px;
		writing-mode: vertical-lr;
		transform: rotate(180deg);
		transform-origin: center center;
		list-style-type: none;
		background: ${props => props.theme.menuHoverColor};
		cursor: pointer;
	}
	.title {
		/* padding: 0rem 1rem 1rem 0.5rem; */
		color: #fff;
		font-weight: 650;
	}
	.content.react-tabs__tab-panel--selected {
		background-color: black;
		padding: 2rem;
		
	}
	.react-tabs__tab--selected {
		background: rgb(240, 192, 55);
		border-bottom-right-radius: 20px;
		-webkit-box-shadow: 2px 2px 6px 3px rgba(0,255,0,0.25);
-moz-box-shadow: 2px 2px 6px 3px rgba(0,255,0,0.25);
box-shadow: 2px 2px 6px 3px rgba(0,255,0,0.25);
	}
`;
