import * as React from 'react'
import styled from 'styled-components'
import withBaseStyle from '../base/style'
import { withFlexHorizental, withFlexItemsCenter } from '../layout/flex'

const RawButton = withFlexItemsCenter(withFlexHorizental(withBaseStyle(styled.button``)))

const BaseButton = RawButton.extend`
	padding: 2px 5px;
	text-align: center;
`
export default BaseButton
