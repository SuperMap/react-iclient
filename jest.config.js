module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', 'src/**/index.{js,jsx,ts,tsx}', '!src/**/*.test.{js,jsx,ts,tsx}','!src/**/*.d.ts'],
  setupFiles: ['<rootDir>/test/unit/setup.js', 'jest-canvas-mock'],
  setupFilesAfterEnv: [],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.test.{js,jsx,ts,tsx}'],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js'
  },
  transformIgnorePatterns: ['node_modules/(?!(ant-design-vue)/)'],
  modulePaths: ['src', 'node_modules'],
  moduleNameMapper: {
    '^@libs/(.*)$': '<rootDir>/public/libs/$1'
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'jsx'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  coverageDirectory: '<rootDir>/test/unit/coverage'
};
