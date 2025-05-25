import { mergeConfig, coverageConfigDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, {
  test: {
    environment: 'happy-dom',
    include: ['**/*.test.ts'],
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        'storybook.setup.ts',
        '**/*.stories.*',
        '.storybook'
      ],
    },
  },
})