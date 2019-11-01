module.exports = {
    presets: ['next/babel', '@babel/preset-typescript'],
    plugins: [['styled-components']],
    env: {
        test: {
            plugins: ['styled-jsx/babel-test'],
        },
    },
};
