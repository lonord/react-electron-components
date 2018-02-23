import * as React from 'react'
import * as Icon from 'react-fontawesome'
import Button from './button/button'
import IconButton from './button/icon'
import Dialog, { DialogProps, withDialog } from './dialog/dialog'
import Modal from './layout/modal'
import Overlay from './layout/overlay'
import MenuItem from './menu/item'
import Menu, { MenuProps, withMenu } from './menu/menu'
import Separate from './menu/separate'

export {
	Button,
	IconButton,

	Icon,

	Overlay,
	Modal,

	Menu,
	MenuProps,
	withMenu,
	MenuItem,
	Separate,

	Dialog,
	DialogProps,
	withDialog
}

export * from './layout/flex'
export * from './base/style'
