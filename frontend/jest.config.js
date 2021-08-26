require('jest-preset-angular/ngcc-jest-processor');

/** @type {import('ts-jest/dist/types').ProjectConfigTsJest} */
module.exports = {
  preset: 'jest-preset-angular',
  collectCoverage: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  testPathIgnorePatterns: [
    'src/app/global/',
    'src/app/pipes/',
    'src/app/layout/',
    'src/app/views/',
    '/build'
  ],
  coverageThreshold: {
    '.src/app': {
        'branches':0
    }
  }
};