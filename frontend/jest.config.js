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
    'src/app/recipe/',
    'src/app/ingredient/',
    '/build'
  ],
  testResultsProcessor: 'jest-sonar-reporter'
  /*,
  coverageThreshold: {
    './src/app': {
        //defines the coverage
        'branches':0
    }
  }*/
};