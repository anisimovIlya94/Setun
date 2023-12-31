import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button, ButtonTheme } from "./Button"
import { Theme } from "app/providers/ThemeProvider"
import { ThemeDecorator } from "shared/config/ThemeDecorator/ThemeDecorator"
export default {
	title: "shared/Button",
	component: Button,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Button>
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />


export const Primary = Template.bind({})
Primary.args = {
	children: "Кнопка"
}

export const Clear = Template.bind({})
Clear.args = {
	children: "Кнопка",
	theme: ButtonTheme.CLEAR
}

export const Outline = Template.bind({})
Outline.args = {
	children: "Кнопка",
	theme: ButtonTheme.OUTLINED
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
	children: "Кнопка",
	theme: ButtonTheme.OUTLINED,
}

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]