module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/src.*(\\.|/)(test|spec))\\.(tsx?|ts?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePathIgnorePatterns: ['dist'],
    collectCoverage: true,
    coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    globals: {
        'ts-jest': {
            diagnostics: false,
            tsConfig: './jest.tsconfig.json',
        },
    },
    rootDir: process.cwd(),
};
