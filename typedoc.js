module.exports = {
    name: "Documentation",
    readme: "./README.md",
    hideGenerator: "true",
    mode: "modules",
    out: "docs",
    exclude: [
        'src/tests/**/*',
        'node_modules/**/*',
        'dist/**/*'
    ],
    theme: "default",
    ignoreCompilerErrors: "true",
    experimentalDecorators: "true",
    excludePrivate: "true",
    target: "ES6",
    moduleResolution: "node",
    emitDecoratorMetadata: "true",
    preserveConstEnums: "true",
    stripInternal: "true",
    suppressExcessPropertyErrors: "true",
    suppressImplicitAnyIndexErrors: "true",
    module: "commonjs",
    excludeExternals: "true",
    externalPattern: "node_modules",
    includeDeclarations: "false",
    verbose: "true"
};