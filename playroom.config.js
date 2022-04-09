module.exports = {
  components: './src/index.ts',
  outputPath: './storybook-static/playroom',
  exampleCode: '<Button />',
  openBrowser: false,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
  }),
};
