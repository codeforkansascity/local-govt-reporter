const {
    override,
    addBabelPlugin,
    addDecoratorsLegacy,
    addBundleVisualizer,
    addWebpackModuleRule,
    addWebpackAlias,
    adjustWorkbox,
    useBabelRc,
  } = require("customize-cra");
  const path = require("path");
  
  module.exports = override(
    useBabelRc(),
    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
  
    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),
  
    // add an alias for "ag-grid-react" imports
    addWebpackAlias({
      ["ag-grid-react$"]: path.resolve(__dirname, "src/shared/agGridWrapper.js")
    }),
  
    // adjust the underlying workbox
    adjustWorkbox(wb =>
      Object.assign(wb, {
        skipWaiting: true,
        exclude: (wb.exclude || []).concat("index.html")
      })
    ),
    addWebpackModuleRule({
      test: /\.jsx?$/,
      include: [
        'node_modules/@salesforce/design-system-react',
      ].map(
        someDir => path.resolve(
          process.cwd(),
          someDir
        )
      ),
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          "react-app"
        ],
      },
    }),
  );