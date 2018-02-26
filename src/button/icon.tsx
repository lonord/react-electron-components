import * as React from 'react'
import * as Fa from 'react-fontawesome'
import styled, { StyledComponentClass } from 'styled-components'
import Button from './button'

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: string
	spin?: boolean
}

const IconButton: React.SFC<IconButtonProps> = (props) => {
	const { icon, children, spin, ...rest } = props
	return (
		<Button {...rest}>
			<Fa name={icon} spin={!!spin} />
			{children}
		</Button>
	)
}

export default IconButton
