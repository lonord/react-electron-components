import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { withBoxShadow, withRadius } from '../base/style'
import IconButton from '../button/icon'
import {
	FlexItemAdaptive,
	FlexItemFix,
	withFlexAlignItemsCenter,
	withFlexAllItemsCenter,
	withFlexHorizental,
	withFlexVertical,
	withItemAdaptive,
	withItemFix
} from '../layout/flex'
import Modal from '../layout/modal'

const DialogModal = withFlexAllItemsCenter(withFlexHorizental(styled(Modal) `
	height: 100%;
	width: 100%;
	background: rgba(0,0,0,0.2);
`))
DialogModal.displayName = 'DialogModal'

const DialogWindow = withRadius(withBoxShadow(withFlexVertical(FlexItemFix.extend`
	min-width: 400px;
	background: white;
	overflow: hidden;
`)))
DialogWindow.displayName = 'DialogWindow'

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
	isOpen: boolean
	onClose()
	spaceClickClosable?: boolean
	title?: string
	showClose?: boolean
	buttons?: React.ReactNode
	buttonsAlign?: 'left' | 'center' | 'right'
}

export default class Dialog extends React.Component<DialogProps, any> {

	static defaultProps: DialogProps = {
		isOpen: false,
		// tslint:disable-next-line:no-empty
		onClose: () => { },
		spaceClickClosable: true,
		showClose: true,
		buttonsAlign: 'right'
	}

	spaceClick = () => {
		const { onClose, spaceClickClosable } = this.props
		if (spaceClickClosable && onClose) {
			onClose()
		}
	}

	render() {
		const {
			isOpen,
			onClose,
			spaceClickClosable,
			title,
			showClose,
			buttons,
			buttonsAlign,
			children,
			...rest } = this.props
		return (
			<DialogModal isOpen={isOpen} spaceClicked={this.spaceClick}>
				<DialogWindow onClick={(e) => e.stopPropagation()} {...rest}>
					{title
						? <TitleArea showClose={showClose} onClose={onClose}>{title}</TitleArea>
						: null}
					<ContentWrap>{children}</ContentWrap>
					{React.isValidElement(buttons) || (Array.isArray(buttons) && buttons.length > 0)
						? <ButtonArea buttonsAlign={buttonsAlign}>{buttons}</ButtonArea>
						: null}
				</DialogWindow>
			</DialogModal>
		)
	}
}

const TitleAreaWrap = withFlexHorizental(FlexItemFix.extend`
	border-bottom: 1px solid #eee;
`)
TitleAreaWrap.displayName = 'TitleAreaWrap'
const TitleAreaTitleWrap = withFlexAlignItemsCenter(withFlexHorizental(styled(FlexItemAdaptive) `
	padding: 8px;
`))
TitleAreaTitleWrap.displayName = 'TitleAreaTitleWrap'
const TitleAreaIcon = withItemFix(styled(IconButton) `
	width: 36px;
	font-size: 16px;
	color: #aaa;
`)
TitleAreaIcon.displayName = 'TitleAreaIcon'
interface TitleAreaProps {
	showClose: boolean
	onClose()
}
const TitleArea: React.SFC<TitleAreaProps> = (props) => {
	return (
		<TitleAreaWrap>
			<TitleAreaTitleWrap>{props.children}</TitleAreaTitleWrap>
			{props.showClose
				? <TitleAreaIcon icon="times" onClick={props.onClose}/>
				: null}
		</TitleAreaWrap>
	)
}

const ContentWrap = FlexItemAdaptive.extend`
	padding: 8px;
	min-height: 50px;
`
ContentWrap.displayName = 'ContentWrap'

const ButtonAreaWrapOrigin = withFlexHorizental(FlexItemFix) as React.ComponentClass<ButtonAreaWrapProps>
interface ButtonAreaWrapProps extends React.HTMLAttributes<HTMLDivElement> {
	align?: 'left' | 'center' | 'right'
}
const ButtonAreaWrap = styled(ButtonAreaWrapOrigin)`
	border-top: 1px solid #eee;
	padding: 8px;
	justify-content: ${(props) =>
		props.align === 'left' ? 'flex-start' : props.align === 'center' ? 'center' : 'flex-end'};
`
ButtonAreaWrap.displayName = 'ButtonAreaWrap'
interface ButtonAreaProps {
	buttonsAlign: 'left' | 'center' | 'right'
}
const ButtonArea: React.SFC<ButtonAreaProps> = (props) => {
	return (
		<ButtonAreaWrap align={props.buttonsAlign}>{props.children}</ButtonAreaWrap>
	)
}
