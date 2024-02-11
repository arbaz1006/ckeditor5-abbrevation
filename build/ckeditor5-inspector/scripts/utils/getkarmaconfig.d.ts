declare function _exports(): {
    basePath: string;
    frameworks: string[];
    files: string[];
    preprocessors: {
        'tests/index.js': string[];
    };
    webpack: {
        mode: any;
        entry: {
            CKEditorInspector: string;
            MiniCKEditorInspector: string;
        };
        module: {
            rules: ({
                test: RegExp;
                exclude: RegExp;
                loader: string;
                options: {
                    presets: (string | {
                        development: boolean;
                    })[][];
                    plugins: never[];
                };
                use?: undefined;
            } | {
                test: RegExp;
                use: ({
                    loader: string;
                    options: {
                        injectType: string;
                        attributes: {
                            'data-cke-inspector': boolean;
                        };
                        importLoaders?: undefined;
                        sourceMap?: undefined;
                        postcssOptions?: undefined;
                    };
                } | {
                    loader: string;
                    options: {
                        importLoaders: number;
                        sourceMap: boolean;
                        injectType?: undefined;
                        attributes?: undefined;
                        postcssOptions?: undefined;
                    };
                } | {
                    loader: string;
                    options: {
                        sourceMap: boolean;
                        postcssOptions: {
                            ctx: {
                                cssnano: boolean;
                            };
                        };
                        injectType?: undefined;
                        attributes?: undefined;
                        importLoaders?: undefined;
                    };
                })[];
                exclude?: undefined;
                loader?: undefined;
                options?: undefined;
            } | {
                test: RegExp;
                use: ({
                    loader: string;
                    options: {
                        presets: (string | {
                            development: boolean;
                        })[][];
                        jsx?: undefined;
                    };
                } | {
                    loader: string;
                    options: {
                        jsx: boolean;
                        presets?: undefined;
                    };
                })[];
                exclude?: undefined;
                loader?: undefined;
                options?: undefined;
            })[];
        };
        optimization: {
            minimize: boolean;
            minimizer: import("terser-webpack-plugin")<import("terser").MinifyOptions>[];
        };
        output: {
            path: string;
            library: string;
            filename: (data: any) => any;
            libraryTarget: string;
            libraryExport: string;
        };
        plugins: import("webpack").DefinePlugin[];
    };
    webpackMiddleware: {
        noInfo: boolean;
        stats: string;
    };
    reporters: any[];
    port: number;
    colors: boolean;
    logLevel: string;
    browsers: string[] | null;
    customLaunchers: {
        CHROME_CI: {
            base: string;
            flags: string[];
        };
        CHROME_LOCAL: {
            base: string;
            flags: string[];
        };
    };
    singleRun: boolean;
    concurrency: number;
    browserNoActivityTimeout: number;
    mochaReporter: {
        showDiff: boolean;
    };
};
export = _exports;
