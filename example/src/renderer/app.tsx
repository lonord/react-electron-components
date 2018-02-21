import * as React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { FlexHorizental, FlexItemAdaptive, FlexItemFix, FlexVertical, IconButton } from '../../../src'

injectGlobal`
	* {
		box-sizing: border-box;
		margin: 0px;
		padding: 0px;
		border: 0px;
	}
	html {
		background: white;
		width: 100%;
		height: 100%;
	}
	body {
		padding: 8px;
		width: 100%;
		height: 100%;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
		Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
	}
	#react-root {
		height: 100%;
	}
`

const Section = styled.div`
	padding: 10px 0 10px;
	border-bottom: 1px solid #eee;
`

const FlexVertical1 = FlexVertical.extend`
	height: 100px;
	border: 1px solid green;
`

const FlexItemFix1 = FlexItemFix.extend`
	background: red;
	height: 20px;
`

const FlexItemFix2 = FlexItemFix.extend`
	background: blue;
	height: 25px;
`

const FlexItemAdaptive1 = FlexItemAdaptive.extend`
	background: pink;
`

const FlexHorizental1 = FlexHorizental.extend`
	border: 1px solid green;
`

const FlexItemFix3 = FlexItemFix.extend`
	background: red;
	width: 100px;
`

const FlexItemFix4 = FlexItemFix.extend`
	background: blue;
	width: 200px;
`

const FlexItemAdaptive2 = FlexItemAdaptive.extend`
	background: pink;
`

const IconButton1 = styled(IconButton) `
	background: yellow;
	border: 1px solid green;
`

const IconButton2 = styled(IconButton1) `
	font-size: 20px;
	background: pink;
`

export default () => (
	<div>
		<Section>
			<FlexVertical1>
				<FlexItemFix1>fixed size</FlexItemFix1>
				<FlexItemFix2>fixed size</FlexItemFix2>
				<FlexItemAdaptive1>adaptive size</FlexItemAdaptive1>
			</FlexVertical1>
		</Section>
		<Section>
			<FlexHorizental1>
				<FlexItemFix3>fixed size</FlexItemFix3>
				<FlexItemFix4>fixed size</FlexItemFix4>
				<FlexItemAdaptive2>adaptive size</FlexItemAdaptive2>
			</FlexHorizental1>
		</Section>
		<Section>
			<IconButton icon="user" />
			<IconButton1 icon="user" />
			<IconButton2 icon="user" />
		</Section>
	</div>
)
