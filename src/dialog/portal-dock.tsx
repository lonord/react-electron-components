import * as React from 'react'

interface DockCompState {
	isOpen: boolean
}

export interface CompItemProps {
	isOpen: boolean
	onClose()
}

export default function createPortalDock(Comp: React.ComponentType<CompItemProps>) {
	let listener: (isOpen: boolean) => void = null
	class DockComp extends React.Component<any, DockCompState> {

		state: DockCompState = {
			isOpen: false
		}

		onUpdate = (isOpen: boolean) => {
			this.setState({
				isOpen
			})
		}

		componentDidMount() {
			listener = this.onUpdate
		}

		componentWillUnmount() {
			listener = null
		}

		render() {
			return (
				<Comp isOpen={this.state.isOpen} onClose={() => this.onUpdate(false)}/>
			)
		}
	}
	return {
		show: () => {
			listener && listener(true)
		},
		close: () => {
			listener && listener(false)
		},
		DockComp: DockComp as React.ComponentClass<any>
	}
}
