const R = require('ramda')
const { edit, getPaths } = require('@rescripts/utilities')

const isLoaderPaths = R.allPass([
  R.is(Array),
  R.any(R.allPass(
    R.is(Object),
    R.where({
      test: R.is(RegExp),
      loader: R.allPass(R.is(String), R.contains('babel')),
      options: R.is(Object)
    })
  )),
  R.any(R.allPass(
    R.is(Object),
    R.propSatisfies('oneOf', R.is(Array))
  ))
])

const addElmLoader = config =>
  edit(
    R.prepend({
      test: /\.elm$/,
      exclude: [
        /elm-stuff/,
        /node_modules/
      ],
      loader: require.resolve('elm-loader')
    }),
    getPaths(isLoaderPaths, config),
    config
  )

module.exports = addElmLoader
