module.exports = {
    presets: ['next/babel', '@babel/preset-typescript', '@babel/preset-flow', '@zeit/next-typescript/babel'],
    plugins: ['styled-components', '@babel/plugin-proposal-class-properties', '@babel/proposal-object-rest-spread'],
    env: {
        test: {
            plugins: ['styled-jsx/babel-test'],
        },
    },
};
