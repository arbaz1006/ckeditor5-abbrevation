declare function _exports(cliArguments: Array<string>): ReleaseOptions;
export = _exports;
export type ReleaseOptions = {
    packages: Array<string> | null;
};
