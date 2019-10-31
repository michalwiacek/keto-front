const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const path = require('path');

const nextConfig = {
    webpack: (config, options) => {
        config.resolve.modules.push(path.resolve('./'));
        return config;
    },
};

module.exports = withPlugins(
    [
        [
            withTM,
            {
                transpileModules: ['common'],
            },
        ],
        [
            withOptimizedImages,
            {
                mozjpeg: {
                    quality: 90,
                },
                webp: {
                    preset: 'default',
                    quality: 90,
                },
            },
        ],
        withFonts,
        withCSS,
    ],
    nextConfig,
);
