import { join } from 'node:path'
import { readFileSync, writeFileSync, watch } from 'node:fs'
import jsonc from 'strip-json-comments'

const cwd = process.cwd();
const dir = join(cwd, 'themes', 'colors');


const colors = (file) => {

  console.log(file)

  const json = readFileSync(join(dir, file), 'utf-8')
  const read = jsonc(json, { trailingCommas: true })
  return JSON.parse(read)

}

const build = () => {
  const theme = JSON.stringify({
    "$schema": "vscode://schemas/color-theme",
    "type": "dark",
    "colors": {
      ...colors('colors.color-theme.json').colors,
    },
    "tokenColors": [
      ...colors('palette.color-theme.json').tokenColors,
      ...colors('css.color-theme.json').tokenColors,
      ...colors('elixir.color-theme.json').tokenColors,
      ...colors('graphql.color-theme.json').tokenColors,
      ...colors('html.color-theme.json').tokenColors,
      ...colors('javascript.color-theme.json').tokenColors,
      ...colors('jsdoc.color-theme.json').tokenColors,
      ...colors('json.color-theme.json').tokenColors,
      ...colors('jsonc.color-theme.json').tokenColors,
      ...colors('liquid.color-theme.json').tokenColors,
      ...colors('markdown.color-theme.json').tokenColors,
      ...colors('php.color-theme.json').tokenColors,
      ...colors('python.color-theme.json').tokenColors,
      ...colors('redirects.color-theme.json').tokenColors,
      ...colors('regexp.color-theme.json').tokenColors,
      ...colors('ruby.color-theme.json').tokenColors,
      ...colors('scss.color-theme.json').tokenColors,
      ...colors('spx.color-theme.json').tokenColors,
      ...colors('toml.color-theme.json').tokenColors,
      ...colors('twig.color-theme.json').tokenColors,
      ...colors('typescript.color-theme.json').tokenColors,
      ...colors('yaml.color-theme.json').tokenColors,
    ]
  }, null, 2);

  writeFileSync(join(cwd, 'themes', 'potion.color-theme.json'), theme);
}

if(process.argv[2] === 'watch') {
  watch(join(cwd, 'themes', 'colors')).on('change', () => build())
} else {
  build()
}
