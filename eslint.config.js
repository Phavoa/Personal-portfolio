import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default function createEslintConfig(props) {
  return [
    { ignores: props.ignores || ['dist'] },
    {
      files: props.files || ['**/*.{js,jsx}'],
      languageOptions: {
        ecmaVersion: props.ecmaVersion || 2020,
        globals: props.globals || globals.browser,
        parserOptions: {
          ecmaVersion: props.parserEcmaVersion || 'latest',
          ecmaFeatures: { jsx: true },
          sourceType: 'module',
        },
      },
      settings: { react: { version: props.reactVersion || '18.3' } },
      plugins: {
        react,
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
      },
      rules: {
        ...js.configs.recommended.rules,
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
        ...reactHooks.configs.recommended.rules,
        'react/jsx-no-target-blank': props.jsxNoTargetBlank || 'off',
        'react-refresh/only-export-components': [
          props.onlyExportComponents || 'warn',
          { allowConstantExport: true },
        ],
      },
    },
  ];
}
