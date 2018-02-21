import * as React from 'react'
import * as Fa from 'react-fontawesome'
import styled from 'styled-components'
import BaseButton from './base'

type BaseButtonProps = typeof BaseButton
export interface IconButtonProps extends BaseButtonProps {
	icon: string
}

const IconButton: React.SFC<IconButtonProps> = (props) => {
	const { icon, children, ...rest } = props
	return (
		<BaseButton {...rest}>
			<Fa name={icon} />
		</BaseButton>
	)
}

export default IconButton
