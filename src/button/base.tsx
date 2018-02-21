import * as React from 'react'
import styled from 'styled-components'
import withBaseStyle from '../base/style'
import { withFlexItemsCenter, withInlineFlexHorizental } from '../layout/flex'

const BaseButton = withFlexItemsCenter(withInlineFlexHorizental(withBaseStyle(styled.button``)))

const Button = BaseButton.extend`
	padding: 5px;
	background: white;
	outline: none;
	text-align: center;
	cursor: pointer;
`
export default Button
