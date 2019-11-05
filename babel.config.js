module.exports = {
    presets: ['next/babel', '@babel/preset-typescript', '@babel/preset-flow'],
    plugins: ['styled-components', '@babel/plugin-proposal-class-properties', '@babel/proposal-object-rest-spread'],
    env: {
        test: {
            plugins: ['styled-jsx/babel-test'],
        },
    },
};
