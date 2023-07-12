export interface buildOptionsPath {
    entry: string
    html: string
    build: string
}

export interface buildOptions{
    paths: buildOptionsPath
    mode: buildMode
    isDev: boolean
}

export type buildMode = "production" | "development"