'use strict'
import test from 'ava'
import fn from './'

test('title', async t => {
  const result = await fn('millette', 'rollodeqc-gh-repo')
  t.is(result.owner.login, 'millette')
})
