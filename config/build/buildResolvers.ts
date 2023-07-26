import { ResolveOptions } from "webpack"
import { buildOptions } from "./types/config"

export function buildResolvers(options: buildOptions): ResolveOptions {
	return {
		extensions: [".tsx", ".ts", ".js"],
		preferAbsolute: true,
		mainFiles: ["index"],
		modules: [options.paths.src, "node_modules"],
		alias: {}
	}
}