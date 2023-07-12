import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { buildOptions } from "./types/config";

export function buildPlugins({paths}: buildOptions) {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html
        })
    ]
}