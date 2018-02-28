import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

export function withBaseStyle<P>(Comp: React.ComponentType<P>) {
	return styled(Comp) `
		border: 0px;
		margin: 0px;
		padding: 0px;
	` as any as StyledComponentClass<P, any>
}

export function withBoxShadow<P>(Comp: React.ComponentType<P>) {
	return styled(Comp) `
		box-shadow: 0px 0px 2px 0px #ccc;
	` as any as StyledComponentClass<P, any>
}

export function withRadius<P>(Comp: React.ComponentType<P>) {
	return styled(Comp) `
		border-radius: 3px;
	` as any as StyledComponentClass<P, any>
}
