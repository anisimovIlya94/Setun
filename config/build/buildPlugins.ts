import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import { buildOptions } from "./types/config"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
// import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer"

export function buildPlugins({paths, isDev}: buildOptions) {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: paths.html
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css"
		}),
		new webpack.DefinePlugin({
			__IS_DEV__ : isDev
		}),
		new webpack.HotModuleReplacementPlugin(),
		// new BundleAnalyzerPlugin()
	]
}