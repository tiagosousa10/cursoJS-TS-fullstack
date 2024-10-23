const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/A0019-exercicio/A0019-exercicio.ts', //ficheiro de entrada
  module: {
    rules: [
      {
        test: /\.tsx?$/, //arquivos que terminao em ts ou tsx
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.frontend.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  devtool: 'source-map', //para mostrar os erros
};
