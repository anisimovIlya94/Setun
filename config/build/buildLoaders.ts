import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { buildOptions } from "./types/config"

export function buildLoaders({ isDev }: buildOptions) {
	const svgrLoader = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	}
	const scssLoaders = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resourcePath: string) => Boolean(resourcePath.includes(".module.")),
						localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:5]",
					}
				}
			},
			"sass-loader",
		],
	}
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	}
	return [
		fileLoader,
		svgrLoader,
		typescriptLoader,
		scssLoaders
	]
}