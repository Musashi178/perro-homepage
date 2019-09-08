import TerserPlugin from 'terser-webpack-plugin';

export const optimization = {
  runtimeChunk: {
    name: 'runtime'
  },
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'all'
      }
    }
  },
  minimizer: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6
      }
    })
  ]
};
