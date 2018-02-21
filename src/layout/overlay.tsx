import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled, { StyledComponentClass } from 'styled-components'

const OverlayWrapper = styled.div`
	height: 100%;
	width: 100%;
	z-index: 10000;
	position: absolute;
	top: 0px;
	left: 0px;
	overflow: hidden;
`

class Overlay extends React.Component<React.HTMLAttributes<HTMLDivElement>, any> {
	render() {
		return ReactDOM.createPortal(
			<OverlayWrapper {...this.props} />,
			document.body
		)
	}
}

export default Overlay
