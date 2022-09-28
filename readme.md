## Potion Theme (vscode theme)

[VSCode](https://code.visualstudio.com/) dark color theme variation of the [Material](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme) theme. Implements a [Monokai](https://monokai.nl/) flavor and cosmic-like syntax coloring on an obsidian black workspace. Material Potion extends JavaScript, HTML/Liquid and Elixir syntaxes.

## Preview

<img src="https://github.com/panoply/vscode-potion-theme/blob/master/preview.png?raw=true" width="100%">

## Grammar Extensions

Potion extends several textmate grammars natively supported in vscode. The extended grammars are leveraging grammar injections to extend a couple of languages so we have a little more control of rendered colors.

### Settings Recommendation

```jsonc
{
  "breadcrumbs.enabled": false,
  "breadcrumbs.icons": true,
  "breadcrumbs.filePath": "last",
  "editor.minimap.enabled": false,
  "editor.matchBrackets": "always",
  "editor.renderWhitespace": "boundary",
  "editor.fontFamily": "'Courier New', monospace",
  "editor.cursorSmoothCaretAnimation": true,
  "editor.fontSize": 17.2,
  "editor.codeLens": true,
  "editor.cursorStyle": "line-thin",
  "editor.tabSize": 2,
  "editor.letterSpacing": 0.1,
  "editor.lineHeight": 20,
  "editor.fontWeight": "500",
  "editor.smoothScrolling": true,
  "editor.scrollBeyondLastLine": false,
  "editor.formatOnPaste": false,
  "editor.formatOnSave": false,
  "editor.formatOnType": false,
  "editor.wordWrap": "wordWrapColumn",
  "editor.wordWrapColumn": 96,
  "editor.detectIndentation": true,
  "editor.renderIndentGuides": true,
  "editor.overviewRulerBorder": false,
  "editor.fastScrollSensitivity": 5,
  "editor.renderControlCharacters": false,
  "explorer.confirmDragAndDrop": false,
  "explorer.autoReveal": true,
  "debug.showInStatusBar": "always",
  "window.zoomLevel": 0,
  "window.restoreFullscreen": true,
  "window.nativeTabs": false,
  "window.titleBarStyle": "native",
  "workbench.sideBar.location": "left",
  "workbench.tree.indent": 5,
  "workbench.tree.renderIndentGuides": "none",
  "workbench.fontAliasing": "default",
  "workbench.activityBar.visible": true,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.editor.showTabs": true
}
```

🥛 <small>Laced with Moloko Plus by [Νίκος Σαβίδης](mailto:nicos@gmx.com)</small>
