// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    SuperMap: 'readonly',
    Cesium: 'readonly'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
      }
    }
  },
  extends: ['react-app'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['import'],
  rules: {
    'new-cap': 'off',
    'generator-star-spacing': 'off',
    'no-useless-escape': 'off',
    'space-before-function-paren': 0,
    'no-console': 0,
    'no-tabs': 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: ['error', 'always'],
    'no-delete-var': 2,
    'prefer-const': 0,
    //Ensure imports point to a file/module that can be resolved
    'import/no-unresolved': [2, { commonjs: true, amd: true, ignore: ['geojson'] }],
    //Ensure named imports correspond to a named export in the remote file
    'import/named': 2,
    //Ensure a default export is present, given a default import
    'import/default': 2,
    //Restrict which files can be imported in a given folder
    'import/no-restricted-paths': 2,
    //Forbid import of modules using absolute paths
    'import/no-absolute-path': 2,
    //Forbid named default exports
    'import/no-named-default': 2,
    //Report repeated import of the same module in multiple places
    'import/no-duplicates': 1,
    //Ensure consistent use of file extension within the import path
    'import/extensions': 0,
    //Ensure all imports appear before other statements
    'import/first': 1,
    //Enforce a newline after import statements
    'import/newline-after-import': 1,
    //Prevent importing the submodules of other modules
    'import/no-internal-modules': 0,
    //Forbid unassigned imports
    'import/no-unassigned-import': 0
  }
};
