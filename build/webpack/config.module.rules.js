import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { settings, userSettings } from '../config';
import { isDevMode } from './helpers';

const { config: userConfig } = userSettings;

export const rules = [
  {
    test: /\.(js|jsx)$/,
    include: path.resolve(__dirname, '../../', settings.sources.app),
    exclude: /(node_modules)/,
    loader: 'babel-loader',
    options: {
      sourceMap: isDevMode()
    }
  },
  {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader']
  },
  {
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      { loader: 'css-loader', options: { sourceMap: isDevMode() } },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: isDevMode(),
          config: {
            ctx: {
              usePurifyCSS: userConfig.purifyCSS.usePurifyCSS,
              cssnano: {
                discardComments: {
                  removeAll: true
                }
              },
              autoprefixer: {
                overrideBrowserslist: [
                  '> 1%',
                  'last 3 version',
                  'ie 8',
                  'ie 9',
                  'Firefox ESR',
                  'Opera 12.1'
                ]
              }
            }
          }
        }
      },
      { loader: 'sass-loader', options: { sourceMap: isDevMode() } }
    ]
  },
  {
    test: /\.(woff(2)?|ttf|eot|svg|png|gif|jpe?g)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: '../',
          useRelativePath: true,
          name: '[name].[ext]'
        }
      }
    ]
  }
];
