module.exports = {
    'env': {
        'browser': true,
        'node': true,
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'project': 'tsconfig.json',
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
        '@typescript-eslint/tslint',
    ],
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'rules': {
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                'CallExpression': {
                    'arguments': 'first',
                },
                'FunctionDeclaration': {
                    'parameters': 'first',
                },
                'FunctionExpression': {
                    'parameters': 'first',
                },
            },
        ],
        '@typescript-eslint/interface-name-prefix': 'error',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                'multiline': {
                    'delimiter': 'semi',
                    'requireLast': true,
                },
                'singleline': {
                    'delimiter': 'semi',
                    'requireLast': false,
                },
            },
        ],
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/quotes': [
            'error',
            'single',
        ],
        '@typescript-eslint/semi': [
            'error',
            'always',
        ],
        '@typescript-eslint/type-annotation-spacing': 'error',
        'camelcase': 'error',
        'comma-dangle': 'off',
        'curly': 'error',
        'default-case': 'error',
        'dot-notation': 'error',
        'eol-last': 'off',
        'eqeqeq': [
            'error',
            'smart',
        ],
        'guard-for-in': 'error',
        'id-blacklist': [
            'error',
            'any',
            'Number',
            'number',
            'String',
            'string',
            'Boolean',
            'boolean',
            'Undefined',
            'undefined',
        ],
        'id-match': 'error',
        'max-len': [
            'error',
            {
                'code': 200,
            },
        ],
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-console': [
            'error',
            {
                'allow': [
                    'warn',
                ],
            },
        ],
        'no-debugger': 'error',
        'no-empty': 'error',
        'no-eval': 'error',
        'no-fallthrough': 'error',
        'no-multiple-empty-lines': 'error',
        'no-new-wrappers': 'error',
        'no-redeclare': 'error',
        'no-shadow': [
            'error',
            {
                'hoist': 'all',
            },
        ],
        'no-trailing-spaces': 'off',
        'no-underscore-dangle': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'radix': 'error',
        'spaced-comment': 'error',
        '@typescript-eslint/tslint/config': [
            'error',
            {
                'rules': {
                    'jsdoc-format': true,
                    'one-line': [
                        true,
                        'check-catch',
                        'check-else',
                        'check-open-brace',
                        'check-whitespace',
                    ],
                    'typedef': [
                        true,
                        'parameter',
                        'property-declaration',
                    ],
                    'whitespace': [
                        true,
                        'check-branch',
                        'check-decl',
                        'check-module',
                        'check-operator',
                        'check-separator',
                        'check-type',
                        'check-typecast',
                    ],
                },
            },
        ],
    },
};
