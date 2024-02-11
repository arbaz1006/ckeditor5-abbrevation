declare function _exports(env: any, argv: any): {
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
        minimizer: TerserPlugin<import("terser").MinifyOptions>[];
    };
    output: {
        path: string;
        library: string;
        filename: (data: any) => any;
        libraryTarget: string;
        libraryExport: string;
    };
    plugins: webpack.DefinePlugin[];
};
export = _exports;
import TerserPlugin = require("terser-webpack-plugin");
import webpack = require("webpack");
