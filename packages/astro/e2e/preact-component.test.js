import { prepareTestFactory } from './shared-component-tests.js';

const { test, createTests } = prepareTestFactory({ root: './fixtures/preact-component/' });

const config = {
		counterComponentFilePath: './src/components/Counter.jsx',
		componentFilePath: './src/components/JSXComponent.jsx',
		errorReplace: '{ useState } from',
		errorMessage: 'useState is not defined',
}

test.describe('Preact components in Astro files', () => {
	createTests({
		...config,
		pageUrl: '/',
		pageSourceFilePath: './src/pages/index.astro',
	});
});

test.describe('Preact components in Markdown files', () => {
	createTests({
		...config,
		pageUrl: '/markdown/',
		pageSourceFilePath: './src/pages/markdown.md',
	});
});

test.describe('Preact components in MDX files', () => {
	createTests({
		...config,
		pageUrl: '/mdx/',
		pageSourceFilePath: './src/pages/mdx.mdx',
	});
});
