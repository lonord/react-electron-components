import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

export function withBaseStyle<P>(Comp: React.ComponentType<P>) {
	return styled(Comp) `
		border: 0px;
		margin: 0px;
		padding: 0px;
	`
}

export function withBoxShadow<P>(Comp: React.ComponentType<P>) {
	return styled(Comp) `
		box-shadow: 1px 1px 3px 0px #aaa;
	`
}
