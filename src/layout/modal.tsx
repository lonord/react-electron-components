import * as React from 'react'
import Overlay from './overlay'

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	isOpen: boolean
	spaceClicked?: (e: React.MouseEvent<HTMLDivElement>) => void
	contentRef?: (el: HTMLElement) => void
}

export default class Modal extends React.Component<ModalProps, any> {

	onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const { spaceClicked } = this.props
		e.stopPropagation()
		spaceClicked && spaceClicked(e)
	}

	render() {
		const { isOpen, spaceClicked, contentRef, ...rest } = this.props
		if (!isOpen) {
			return null
		}
		return (
			<Overlay onClick={this.onOverlayClick} onDoubleClick={(e) => e.stopPropagation()}>
				<div {...rest} ref={contentRef}/>
			</Overlay>
		)
	}
}
