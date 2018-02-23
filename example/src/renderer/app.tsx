import * as React from 'react'
import styled, { injectGlobal } from 'styled-components'
import {
	Button,
	Dialog,
	DialogProps,
	FlexHorizental,
	FlexItemAdaptive,
	FlexItemFix,
	FlexVertical,
	IconButton,
	MenuItem,
	Modal,
	Separate,
	withBoxShadow,
	withDialog,
	withMenu
} from '../../../src'

injectGlobal`
	* {
		box-sizing: border-box;
		margin: 0px;
		padding: 0px;
		border: 0px;
	}
	html {
		background: white;
		width: 100%;
		height: 100%;
	}
	body {
		padding: 8px;
		width: 100%;
		height: 100%;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
		Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
	}
	#react-root {
		height: 100%;
	}
`

const Section = styled.div`
	padding: 10px 0 10px;
	border-bottom: 1px solid #eee;
`

const FlexVertical1 = FlexVertical.extend`
	height: 100px;
	border: 1px solid green;
`

const FlexItemFix1 = FlexItemFix.extend`
	background: red;
	height: 20px;
`

const FlexItemFix2 = FlexItemFix.extend`
	background: blue;
	height: 25px;
`

const FlexItemAdaptive1 = FlexItemAdaptive.extend`
	background: pink;
`

const FlexHorizental1 = FlexHorizental.extend`
	border: 1px solid green;
`

const FlexItemFix3 = FlexItemFix.extend`
	background: red;
	width: 100px;
`

const FlexItemFix4 = FlexItemFix.extend`
	background: blue;
	width: 200px;
`

const FlexItemAdaptive2 = FlexItemAdaptive.extend`
	background: pink;
`

const IconButton1 = styled(IconButton) `
	background: yellow;
	border: 1px solid green;
`

const IconButton2 = styled(IconButton1) `
	font-size: 20px;
	background: pink;
`

const Modal1 = withBoxShadow(styled(Modal) `
	margin-left: auto;
	margin-right: auto;
	width: 400px;
	height: 300px;
	background: cyan;
	margin-top: 100px;
`)

const MenuButton = withMenu([
	<MenuItem key="k1">hello</MenuItem>,
	<Separate key="k2"/>,
	<MenuItem key="k3">world</MenuItem>
], Button)

export default () => (
	<div>
		<Section>
			<FlexVertical1>
				<FlexItemFix1>fixed size</FlexItemFix1>
				<FlexItemFix2>fixed size</FlexItemFix2>
				<FlexItemAdaptive1>adaptive size</FlexItemAdaptive1>
			</FlexVertical1>
		</Section>
		<Section>
			<FlexHorizental1>
				<FlexItemFix3>fixed size</FlexItemFix3>
				<FlexItemFix4>fixed size</FlexItemFix4>
				<FlexItemAdaptive2>adaptive size</FlexItemAdaptive2>
			</FlexHorizental1>
		</Section>
		<Section>
			<IconButton icon="user" />
			<IconButton1 icon="user" />
			<IconButton2 icon="user" />
		</Section>
		<Section>
			<ModalExample/>
		</Section>
		<Section>
			<MenuButton>Open menu</MenuButton>
		</Section>
		<Section>
			<DialogExample/>
		</Section>
	</div>
)

interface ModalExampleState {
	isOpen: boolean
}
class ModalExample extends React.Component<any, ModalExampleState> {
	state = {
		isOpen: false
	}

	close = () => {
		this.setState({
			isOpen: false
		})
	}

	open = () => {
		this.setState({
			isOpen: true
		})
	}

	render() {
		return [
			<Button key="a" onClick={this.open}>Show modal</Button>,
			<Modal1 key="b" isOpen={this.state.isOpen}>
				<div>
					Hello, I'm a modal
				</div>
				<div>
					<Button onClick={this.close}>Close modal</Button>
				</div>
			</Modal1>
		]
	}
}

const MyDialog = (props) => (
	<Dialog title="Title" {...props}>
		Hello, It's my dialog
	</Dialog>
)
const DialogTriggerButton = withDialog(MyDialog, Button)
interface DialogExampleState {
	isOpen: boolean
	isOpen2: boolean
	isOpen3: boolean
}
class DialogExample extends React.Component<any, DialogExampleState> {

	state = {
		isOpen: false,
		isOpen2: false,
		isOpen3: false
	}

	close = () => {
		this.setState({
			isOpen: false
		})
	}

	close2 = () => {
		this.setState({
			isOpen2: false
		})
	}

	open = () => {
		this.setState({
			isOpen: true
		})
	}

	open2 = () => {
		this.setState({
			isOpen2: true
		})
	}

	onOpenStatusChange3 = (isOpen: boolean) => {
		console.log(`onOpenStatusChange3 ${isOpen}`)
		this.setState({
			isOpen3: isOpen
		})
	}

	render() {
		const buttons = [
				<Button key="b1" onClick={() => alert('cancel')}>Cancel</Button>,
				<Button key="b2" onClick={() => alert('OK')}>OK</Button>
			]
		return [
			<Button key="a" onClick={this.open}>Show dialog</Button>,
			<Dialog key="dialog"
				isOpen={this.state.isOpen}
				onClose={this.close}
				title="This is title"
				spaceClickClosable={true}>
				Hello, I'm a dialog
			</Dialog>,
			<Button key="b" onClick={this.open2}>Show dialog with buttons</Button>,
			<Dialog key="dialog2"
				isOpen={this.state.isOpen2}
				onClose={this.close2}
				title="This is title"
				spaceClickClosable={true}
				buttons={buttons}>
				Hello, I'm a dialog with buttons
			</Dialog>,
			<DialogTriggerButton key="dialogbutton">Dialog button</DialogTriggerButton>,
			<DialogTriggerButton key="dialogbutton2"
				isDialogOpen={this.state.isOpen3} onDialogStatusChange={this.onOpenStatusChange3}>
				Dialog button2
			</DialogTriggerButton>
		]
	}
}
