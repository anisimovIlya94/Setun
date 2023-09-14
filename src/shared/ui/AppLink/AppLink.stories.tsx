import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { AppLink, AppLinkTheme } from "./AppLink"
import { Theme } from "app/providers/ThemeProvider"
import { ThemeDecorator } from "shared/config/ThemeDecorator/ThemeDecorator"
export default {
	title: "shared/AppLink",
	component: AppLink,
	argTypes: {
		backgroundColor: { control: "color" },
	},
	args: {
		to: "/"
	}
} as ComponentMeta<typeof AppLink>
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />


export const Primary = Template.bind({})
Primary.args = {
	theme: AppLinkTheme.PRIMARY,
	children: "Link"
}

export const Secondary = Template.bind({})
Secondary.args = {
	theme: AppLinkTheme.SECONDARY,
	children: "Link"
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
	theme: AppLinkTheme.PRIMARY,
	children: "Link"
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
	theme: AppLinkTheme.SECONDARY,
	children: "Link"
}

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]