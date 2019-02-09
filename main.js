import { extname } from 'path'
import { Parser, HtmlRenderer } from 'commonmark'
import { createFilter } from 'rollup-pluginutils'

const reader = new Parser()
const writer = new HtmlRenderer({
  smart: true,
  safe: true
})

export default function commonmark(opts = {}) {
  const filter = createFilter(opts.include, opts.exclude)

  return {
    name: 'rollup-plugin-commonmark',
    transform(code, id) {
      if (!filter(id)) return null
      if (extname(id) !== '.md') return null

      const ast = reader.parse(code)
      const html = writer.render(ast)
      return `export default ${JSON.stringify(html)}`
    }
  }
}
