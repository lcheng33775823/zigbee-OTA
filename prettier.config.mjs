import sortImports from '@ianvs/prettier-plugin-sort-imports';

export default {
    plugins: [sortImports],
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 150,
    bracketSpacing: false,
    endOfLine: 'lf',
    tabWidth: 4,
    importOrder: [
        '',
        '<TYPES>^(node:)',
        '',
        '<TYPES>',
        '',
        '<TYPES>^[.]',
        '',
        '<BUILTIN_MODULES>',
        '',
        '<THIRD_PARTY_MODULES>',
        '',
        '^zigbee',
        '',
        '^[.]',
    ],
};