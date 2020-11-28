const test = require('ava')
const mygulp = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => mygulp(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(mygulp('w'), 'w@zce.me')
  t.is(mygulp('w', { host: 'wedn.net' }), 'w@wedn.net')
})
