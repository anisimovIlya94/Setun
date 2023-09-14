import { buildOptions } from "./types/config"
import { buildScssLoader } from "../loaders/buildScssLoader/buildScssLoader"

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
	const scssLoaders = buildScssLoader(isDev)
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