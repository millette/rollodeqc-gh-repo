/*
RoLLodeQc utility to fetch a single repo from GitHub.

Copyright 2016
Robin Millette <mailto:robin@millette.info>
<http://robin.millette.info>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the
[GNU Affero General Public License](LICENSE.md)
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict'

// npm
const ghGot = require('gh-got')
const utils = require('rollodeqc-gh-utils')

module.exports = (owner, repo) => ghGot(
  ['repos', owner, repo].join('/'),
  { headers: { accept: 'application/vnd.github.drax-preview+json' } }
)
  .then((x) => x.body)
  .then(utils.chosenFields)
  .then((x) => {
    if (x.owner) { x.owner = utils.chosenFields(x.owner) }
    if (x.organization) { x.organization = utils.chosenFields(x.organization) }
    return x
  })
