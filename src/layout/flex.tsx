import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'

export const FlexVertical = styled.div`
	display: flex;
	flex-direction: column;
`

export const FlexHorizental = styled.div`
	display: flex;
	flex-direction: row;
`

export const FlexItemFix = styled.div`
	flex-grow: 0;
	flex-shrink: 0;
`

export const FlexItemAdaptive = styled.div`
	flex-grow: 1;
	flex-shrink: 1;
`

export function withFlexVertical<P>(Comp: React.ComponentType<P>) {
	return styled(Comp) `
		display: flex;
		flex-direction: column;
	` as any as StyledComponentClass<P, any>
}

export function withFlexHorizental<P>(Comp: React.ComponentType<P>) {
	return styled(Comp) `
		display: flex;
		flex-direction: row;
	` as any as StyledComponentClass<P, any>
}

export function withInlineFlexVertical<P>(Comp: React.ComponentType<P>) {
	return styled(Comp) `
		display: inline-flex;
		flex-direction: column;
	` as any as StyledComponentClass<P, any>
}

export function withInlineFlexHorizental<P>(Comp: React.ComponentType<P>) {
	return styled(Comp) `
		display: inline-flex;
		flex-direction: row;
	` as any as StyledComponentClass<P, any>
}

export function withFlexAlignItemsCenter<P>(Comp: React.ComponentType<P>) {
	return styled(Comp) `
		align-items: center;
	` as any as StyledComponentClass<P, any>
}

export function withFlexJustifyItemsCenter<P>(Comp: React.ComponentType<P>) {
	return styled(Comp) `
		justify-content: center;
	` as any as StyledComponentClass<P, any>
}

export function withFlexAllItemsCenter<P>(Comp: React.ComponentType<P>) {
	return styled(Comp) `
		align-items: center;
		justify-content: center;
	` as any as StyledComponentClass<P, any>
}

export function withItemFix<P>(Comp: React.ComponentType<P>) {
	return styled(Comp) `
		flex-grow: 0;
		flex-shrink: 0;
	` as any as StyledComponentClass<P, any>
}

export function withItemAdaptive<P>(Comp: React.ComponentType<P>) {
	return styled(Comp) `
		flex-grow: 1;
		flex-shrink: 1;
	` as any as StyledComponentClass<P, any>
}
