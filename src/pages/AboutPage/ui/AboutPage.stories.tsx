import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider"
import { ThemeDecorator } from "shared/config/ThemeDecorator/ThemeDecorator"
import AboutPage from "./AboutPage"
export default {
	title: "page/AboutPage",
	component: AboutPage,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof AboutPage>
const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />


export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]