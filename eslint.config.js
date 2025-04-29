import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    pnpm: false,
    typescript: {
      overrides: {
        // 'ts/ban-ts-comment': 'off',
        // 'ts/prefer-ts-expect-error': 'off',
      },
    },
  },
)
