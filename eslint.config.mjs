import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import eslintPluginImport from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'


export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    ignores: ['node_modules/**', 'dist/**'],
    plugins: { js },
    extends: ['js/recommended']
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    ignores: ['node_modules/**', 'dist/**'],
    languageOptions: { globals: globals.browser }
  },
  react.configs.flat.recommended,

  // React
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    ignores: ['node_modules/**', 'dist/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Electron специфичные глобальные переменные
        window: 'readonly',
        electronAPI: 'readonly'
      }
    },
    plugins: {
      react,
      jsxA11y,
      import: eslintPluginImport,
      'simple-import-sort': eslintPluginSimpleImportSort
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      // Импорт React не обязателен
      'react/react-in-jsx-scope': 'off',

      // Сортировка импортов по группам и алфавиту
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',

      // Запретить дублирующие импорты
      'no-duplicate-imports': 'warn',
      'import/no-duplicates': 'warn',

      // Использовать стрелочные функции для компонентов
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],

      // Не использовать точку с запятой
      'semi': ['warn', 'never'],

      // Табы из 2 пробелов
      'indent': ['warn', 2, { SwitchCase: 1 }],

      // Преимущественно одинарные кавычки
      'quotes': ['warn', 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true
      }],

      // Двойные кавычки в JSX обязательны
      'jsx-quotes': ['warn', 'prefer-double'],

      // Максимальная длина строки
      'max-len': ['warn', {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: false,
        ignoreTemplateLiterals: false
      }],

      // Если свойтв более 5 - обязателен перенос на новую строку
      'object-curly-newline': ['warn', {
        ObjectExpression: {
          minProperties: 5,
          multiline: true,
          consistent: true
        },
        ObjectPattern: {
          minProperties: 5,
          multiline: true,
          consistent: true
        },
        ImportDeclaration: {
          minProperties: 5,
          multiline: true,
          consistent: true
        },
        ExportDeclaration: {
          minProperties: 5,
          multiline: true,
          consistent: true
        }
      }],
      // 'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: false }],
      // Максимум 4 атрибута в одной строке в JSX
      'react/jsx-max-props-per-line': ['warn', { maximum: 4, when: 'always' }],

      // Запятые в конце не нужны
      'comma-dangle': ['warn', 'never'],

      // Только unix окончание строки
      'linebreak-style': ['warn', 'unix'],

      // Пустай строка в конце
      'eol-last': ['warn', 'always'],

      // Обязательные скобки у стрелочных функций
      'arrow-parens': ['warn', 'always'],

      // Запрет на лишние пробелы
      'no-trailing-spaces': 'warn',
      'no-multi-spaces': 'warn',

      // Строгий контроль пробелов в скобках
      'array-bracket-spacing': ['warn', 'never'],
      'object-curly-spacing': ['warn', 'always'],
      'space-in-parens': ['warn', 'never'],
      'template-curly-spacing': ['warn', 'always'],

      // Опционально — запрет пробелов перед точками с запятой
      'semi-spacing': ['warn', { before: false, after: true }]
    }
  },

  // Electron
  {
    files: ['src/main/**/*.js', 'src/preload/**/*.js'],
    ignores: ['node_modules/**', 'dist/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        exports: 'readonly'
      }
    },
    rules: {

    }
  }
])
