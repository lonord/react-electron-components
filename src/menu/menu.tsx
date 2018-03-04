import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { withBoxShadow } from '../base/style'
import Modal, { ModalProps } from '../layout/modal'

export interface MenuModalProps extends ModalProps {
	top: number
	left: number
}

const MenuModal = withBoxShadow(styled(Modal as any as React.ComponentType<MenuModalProps>) `
	top: ${(props) => props.top ? props.top : 0}px;
	left: ${(props) => props.left ? props.left : 0}px;
	position: absolute;
	background: white;
`)

export type MenuProps = MenuModalProps

class Menu extends React.Component<MenuProps, any> {
	render() {
		return <MenuModal {...this.props} />
	}
}
export default Menu

export interface ClickableProps {
	onClick?: (e: any) => void
}
interface MenuTriggerState {
	isOpen: boolean
	top: number
	left: number
}
export type MenuTriggerClass<P> = React.ComponentClass<P>
export function withMenu<P extends ClickableProps>(menuItemsNode: React.ReactNode,
	Comp: React.ComponentType<P>) {
	class MenuTrigger extends React.Component<P, MenuTriggerState> {

		state: MenuTriggerState = {
			isOpen: false,
			top: -10000,
			left: -10000
		}

		menuElement: HTMLElement = null

		triggerClick = (e: React.MouseEvent<any>) => {
			const target = e.currentTarget
			this.setState({
				isOpen: true
			}, () => {
				if (this.menuElement) {
					const rect = calculateMenuPosition(target, this.menuElement)
					this.setState({
						top: rect.top,
						left: rect.left
					})
				}
			})
		}

		close = () => {
			this.setState({
				isOpen: false
			})
		}

		render() {
			return [
				<Comp key="trigger" {...this.props} onClick={this.triggerClick}/>,
				<Menu key="menu" contentRef={(ref) => this.menuElement = ref}
					top={this.state.top} left={this.state.left}
					isOpen={this.state.isOpen}
					spaceClicked={this.close}>{menuItemsNode}</Menu>
			]
		}
	}
	return MenuTrigger as MenuTriggerClass<P>
}

function calculateMenuPosition(trigger: HTMLElement, menu: HTMLElement) {
	const triggerHeight = trigger.clientHeight
	const triggerWidth = trigger.clientWidth
	const triggerTop = trigger.offsetTop
	const triggerLeft = trigger.offsetLeft
	const elHeight = menu.clientHeight
	const elWidth = menu.clientWidth
	const winHeight = window.innerHeight
	const winWidth = window.innerWidth

	if (triggerHeight + triggerTop + elHeight < winHeight) {
		// down
		if (triggerLeft + elWidth < winWidth) {
			return {
				top: triggerHeight + triggerTop,
				left: triggerLeft
			}
		}
		return {
			top: triggerHeight + triggerTop,
			left: triggerLeft + triggerWidth - elWidth
		}
	} else {
		// up
		if (triggerLeft + elWidth < winWidth) {
			return {
				top: triggerTop - elHeight,
				left: triggerLeft
			}
		}
		return {
			top: triggerTop - elHeight,
			left: triggerLeft + triggerWidth - elWidth
		}
	}
}
