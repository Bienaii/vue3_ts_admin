import { viteMockServe } from 'vite-plugin-mock'

export default function createMockServe(isMock: boolean, isServer: boolean) {
	return viteMockServe({
		mockPath: 'mock',
		// localEnabled: isServer,
		// prodEnabled: !isServer && isMock,
		// watchFiles: true,
		// injectCode: `
    //   import { setupProdMockServer } from '../mockServer';
    //   setupProdMockServer();
    // `,
		// logger: true
	})
}
