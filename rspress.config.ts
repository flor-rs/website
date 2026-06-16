import { defineConfig } from '@rspress/core';
import {pluginOpenGraph} from 'rsbuild-plugin-open-graph';

const siteUrl = 'https://flor-rs.github.io/website/';
const base = '/website/';

export default defineConfig({
    base,
    plugins: [pluginOpenGraph({
        // Note, title is page-specific
        title: 'Flor - A high-performance, signal-driven native GUI framework for Rust. Modern, ergonomic, widget-based, and built with a small footprint for general-purpose native desktop apps.',
        // While site name is site wide
        siteName: 'Flor Website',
        type: 'website',
        url: siteUrl,
        image: 'https://rsbuild.rs/og-image.png',
        description: 'Flor is a high-performance, signal-driven native GUI framework for Rust. Modern, ergonomic, widget-based, and built with a small footprint for general-purpose native desktop apps.',
    
    })],
    root: 'docs',
    title: 'Flor Website',
    icon: '/rspress-icon.png',
    logo: {
        light: '/rspress-light-logo.png',
        dark: '/rspress-dark-logo.png',
    },
    lang: 'en',
    locales: [
        {
            lang: 'en',
            label: 'English',
        },
        {
            lang: 'zh',
            label: '中文',
        },
    ],
    themeConfig: {
        socialLinks: [
            {
                icon: 'github',
                mode: 'link',
                content: 'https://github.com/web-infra-dev/rspress',
            },
        ],
    },
    builderConfig: {
        output: {
            assetPrefix: base,
        },
    //     performance: {
    //         buildCache: false,
    //     },
    },
    llms: true,
});
