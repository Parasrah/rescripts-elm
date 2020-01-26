const R = require('ramda')

const addElmLoader = R.over(
  R.lensPath(['modules', 'rules']),
  R.prepend({
    test: /\.elm$/,
    exclude: [
      /elm-stuff/,
      /node_modules/
    ],
    loader: require.resolve('elm-webpack-loader')
  })
)

module.exports = addElmLoader
