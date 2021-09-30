module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    'src/**/index.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts'
  ],
  setupFiles: ['<rootDir>/test/unit/setup.js', 'jest-canvas-mock'],
  setupFilesAfterEnv: [],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.test.{js,jsx,ts,tsx}'],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js'
  },
  transformIgnorePatterns: ['node_modules/(?!(mapbox-gl|ant-design-vue)/)'],
  modulePaths: ['src', 'node_modules'],
  moduleNameMapper: {
    '^@libs/(.*)$': '<rootDir>/public/libs/$1',
    '^@test/(.*)$': '<rootDir>/test/$1',
    '^@types_mapboxgl/(.*)$': '<rootDir>/src/mapboxgl/_types/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/unit/assetsTransformer.js'
  },
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'jsx'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  coverageDirectory: '<rootDir>/test/unit/coverage'
};
