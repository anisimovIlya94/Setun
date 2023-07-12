import webpack from 'webpack';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: buildOptions): webpack.Configuration {
    const {mode, paths, isDev, port} = options
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev? buildDevServer(options): undefined
    }
}