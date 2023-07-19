export interface buildOptionsPath {
    entry: string
    html: string
    build: string
    src: string
}

export interface buildOptions{
    paths: buildOptionsPath
    mode: buildMode
    isDev: boolean
    port: number
}

export interface buildEnv {
    port: number
    mode: buildMode
}

export type buildMode = "production" | "development"