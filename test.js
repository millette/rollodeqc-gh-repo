'use strict'
import test from 'ava'
import fn from './'

test('title', async t => {
  const result = await fn('millette', 'rollodeqc-gh-repo')
  t.is(result.owner.login, 'millette')
})

test('404', t => t.throwsAsync(fn('millette/rollodeqc-gh-repo-404'), 'Response code 404 (Not Found)'))
