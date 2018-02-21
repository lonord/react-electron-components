import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

export default function withBaseStyle<P>(Comp: React.ComponentType<P>) {
	return styled(Comp) `
		border: 0px;
		margin: 0px;
		padding: 0px;
	`
}
