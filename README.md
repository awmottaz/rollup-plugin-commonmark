# rollup-plugin-commonmark

## Install

```node
npm install rollup-plugin-commonmark --save-dev
```

## Usage

```js
// main.js
import htmlContent from './article.md'
document.getElementById('my-article').innerHTML = htmlContent

// rollup.config.js
import commonmark from 'rollup-plugin-commonmark'

export default {
    input: 'main.js',
    output: {
        format: 'iife',
        file: 'bundle.js'
    },
    plugins: [
        commonmark({
            //`include` and `exclude` can each be a minimatch
            // pattern, or an array of minimatch patterns,
            // relative to process.cwd()
            include: undefined,
            exclude: undefined
        })
    ]
}
```
