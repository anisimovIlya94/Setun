import path from 'path';
import webpack from'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { buildEnv } from './config/build/types/config';



const config = (env: buildEnv): webpack.Configuration => {
  const mode = env.mode || "development"
  const isDev = mode === "development"
  const port = env.port || 3000
  return buildWebpackConfig({
    mode,
    paths: {
      entry: path.resolve(__dirname, "src", "index.ts"),
      html: path.resolve(__dirname, "public", "index.html"),
      build: path.resolve(__dirname, 'build')
    },
    isDev,
    port
  })
}

export default config