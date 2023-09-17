import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Modal } from "./Modal"
import { Theme } from "app/providers/ThemeProvider"
import { ThemeDecorator } from "shared/config/ThemeDecorator/ThemeDecorator"
export default {
	title: "shared/Modal",
	component: Modal,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Modal>
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />


export const Light = Template.bind({})
Light.args = {
	children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis soluta, maiores dolorem ipsam optio explicabo aliquam odio illo tempora ducimus error voluptates sapiente id, excepturi temporibus dolor harum ea!",
	isOpen: true
}

export const Dark = Template.bind({})
Dark.args = {
	children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis soluta, maiores dolorem ipsam optio explicabo aliquam odio illo tempora ducimus error voluptates sapiente id, excepturi temporibus dolor harum ea!",
	isOpen: true
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]