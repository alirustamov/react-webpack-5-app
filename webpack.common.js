const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // входная точка - исходный файл
  output: {
    path: path.resolve(__dirname, "./dist"), // путь к каталогу выходных файлов - папка public
    publicPath: "/dist/",
    filename: "bundle.js", // название создаваемого файла
  },
  module: {
    rules: [
      //загрузчик для jsx
      {
        test: /\.(js|jsx|tsx|ts)$/, // определяем тип файлов
        exclude: /(node_modules)/, // исключаем из обработки папку node_modules
        loader: "babel-loader", // определяем загрузчик
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"], // используемые плагины
        },
      },
      // { test: /\.(css|scss)$/, use: [
      //     { loader: "style-loader" },  // to inject the result into the DOM as a style block
      //     { loader: "css-modules-typescript-loader"},  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
      //     { loader: "css-loader", options: { modules: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
      //     { loader: "sass-loader" },  // to convert SASS to CSS
      //     // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
      //   ] },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
};
