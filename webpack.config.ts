import path from 'path';
import webpack from'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

const mode = "development"
const isDev = mode === "development"

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths: {
    entry: path.resolve(__dirname, "src", "index.ts"),
    html: path.resolve(__dirname, "public", "index.html"),
    build: path.resolve(__dirname, 'build')
  },
  isDev
})

export default config