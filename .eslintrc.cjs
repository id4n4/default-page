module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "ignorePatterns": ["vite.config.ts", ".eslintrc.cjs", 'tailwind.config.js'],
    "rules": {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
    }
}
