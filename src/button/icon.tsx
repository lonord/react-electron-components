import * as React from 'react'
import * as Fa from 'react-fontawesome'
import styled, { StyledComponentClass } from 'styled-components'
import Button from './base'

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: string
}

const IconButton: React.SFC<IconButtonProps> = (props) => {
	const { icon, children, ...rest } = props
	return (
		<Button {...rest}>
			<Fa name={icon} />
		</Button>
	)
}

export default IconButton
