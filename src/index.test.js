const addElmLoader = require('.')

describe('rescript elm', () => {
  it('should prepend elm config', () => {
    const config = {
      modules: {
        rules: [
          { label: 'a' }
        ]
      }
    }

    const output = addElmLoader(config)
    const { rules } = output.modules

    expect(rules).toHaveLength(2)

    const [first, second] = rules
    expect(first).toHaveProperty('test')
    expect(first).toHaveProperty('loader')
    expect(second).toHaveProperty('label')
    expect(second.label).toEqual('a')
  })
})
