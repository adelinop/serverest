/* eslint-disable linebreak-style */
const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild')

module.exports = defineConfig({
	video: false,
	trashAssetsBeforeRuns: true,
	defaultCommandTimeout: 15000,
	chromeWebSecurity: false,
	viewportWidth: 1920,
	viewportHeight: 1080,
	reporterOptions: {
		reportDir: 'reports',
		overwrite: true
	},
	e2e: {
		async setupNodeEvents(on, config) {
			const bundler = createBundler({
				plugins: [createEsbuildPlugin(config)]
			})
			on('before:run', async details => {
				console.log('override before:run')
				await beforeRunHook(details)
			})
			on('after:run', async () => {
				console.log('override after:run')
				await afterRunHook()
			})

			on('file:preprocessor', bundler)
			await addCucumberPreprocessorPlugin(on, config)

			return config
		},
		specPattern: 'cypress/e2e/features/*.feature',
		experimentalSessionAndOrigin: true
	}
})
