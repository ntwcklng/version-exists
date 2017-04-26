const test = require('ava')

const versionExists = require('../')

test('Valid Version', async t => {
  await versionExists('args', '2.6.0').then(exists => {
    t.true(exists)
  })
})

test('Inalid Version', async t => {
  await versionExists('args', '99.6.0').then(exists => {
    t.false(exists)
  })
})

test('Module does not exist', async t => {
  try {
    await versionExists('sdgsgsfdgsrghghrshrt', '2.6.0')
  } catch (err) {
    t.is(err, 'Error > Cannot find sdgsgsfdgsrghghrshrt in the NPM registry')
  }
})
