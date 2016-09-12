# rollodeqc-gh-repo
[![Build Status](https://travis-ci.org/millette/rollodeqc-gh-repo.svg?branch=master)](https://travis-ci.org/millette/rollodeqc-gh-repo)
[![Coverage Status](https://coveralls.io/repos/github/millette/rollodeqc-gh-repo/badge.svg?branch=master)](https://coveralls.io/github/millette/rollodeqc-gh-repo?branch=master)
[![Dependency Status](https://gemnasium.com/badges/github.com/millette/rollodeqc-gh-repo.svg)](https://gemnasium.com/github.com/millette/rollodeqc-gh-repo)
> RoLLodeQc utility to fetch a single repo from GitHub.

## Install
```
$ npm install --save rollodeqc-gh-repo
```

## Now with update-notifier
The cli now uses [update-notifier][] to let the user know about updates to this program.

Users have the ability to opt-out of the update notifier by changing
the optOut property to true in ~/.config/configstore/update-notifier-rollodeqc-gh-user-streak.json.
The path is available in notifier.config.path.

Users can also opt-out by setting the environment variable NO_UPDATE_NOTIFIER
with any value or by using the --no-update-notifier flag on a per run basis.

## Usage
```js
const rollodeqcGhRepo = require('rollodeqc-gh-repo')

rollodeqcGhRepo('unicorns')
//=> 'unicorns & rainbows'
```

## API
### rollodeqcGhRepo(input, [options])
#### input
Type: `string`

Lorem ipsum.

#### options
##### foo
Type: `boolean`<br>
Default: `false`

Lorem ipsum.

## CLI
```
$ npm install --global rollodeqc-gh-repo
```

```
$ rollodeqc-gh-repo --help

  Usage
    rollodeqc-gh-repo [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ rollodeqc-gh-repo
    unicorns & rainbows
    $ rollodeqc-gh-repo ponies
    ponies & rainbows
```


## License
AGPL-v3 © [Robin Millette](http://robin.millette.info)

[update-notifier]: <https://github.com/yeoman/update-notifier>
