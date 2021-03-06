import * as React from 'react'
import styled, { StyledComponentClass } from 'styled-components'
import { withBaseStyle } from '../base/style'
import { withFlexAllItemsCenter, withInlineFlexHorizental } from '../layout/flex'

const BaseButton = withFlexAllItemsCenter(withInlineFlexHorizental(withBaseStyle(styled.button``)))

const Button = BaseButton.extend`
	padding: 5px;
	background: white;
	outline: none;
	text-align: center;
	cursor: ${(p) => p.onClick || p.onClickCapture || p.onDoubleClick || p.onDoubleClickCapture ? 'pointer' : 'default'};
`
export default Button
