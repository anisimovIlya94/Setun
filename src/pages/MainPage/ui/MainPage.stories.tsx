import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider"
import { ThemeDecorator } from "shared/config/ThemeDecorator/ThemeDecorator"
import MainPage from "./MainPage"
export default {
	title: "page/MainPage",
	component: MainPage,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof MainPage>
const Template: ComponentStory<typeof MainPage> = () => <MainPage />


export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]