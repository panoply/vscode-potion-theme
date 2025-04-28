# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

**Bold text**

*Italic text*

***Bold and italic text***

~~Strikethrough text~~

<sup>Superscript</sup> and <sub>Subscript</sub>

---

> Blockquote
> > Nested Blockquote

---

- Unordered list
  - Nested item
    - Deep nested item

* Another unordered list with asterisk

+ Another unordered list with plus

1. Ordered list item 1
2. Ordered list item 2
   1. Nested ordered item
   2. Another nested ordered item

---

- [x] Completed task
- [ ] Incomplete task

---

`Inline code`

```
Code block (fenced with triple backticks)
```

~~~javascript
// Code block with language hint (JavaScript)
console.log('Hello, world!');
~~~

```python
# Code block with another language
print("Hello, world!")
```

```html
<!-- HTML inside Markdown -->
<div>Hello!</div>
```

---

[Inline link](https://example.com)

[Reference link][example]

[example]: https://example.com

![Inline image](https://via.placeholder.com/150)

![Reference image][image-ref]

[image-ref]: https://via.placeholder.com/150

---

| Header 1 | Header 2 | Header 3 |
|:---------|:--------:|---------:|
| Left     | Center   | Right    |
| A        | B        | C        |

---

**Horizontal rules:**

---

***

___

---

**Escaped characters:**

\*Not italic\*
\_Not italic\_
\\\[Escape brackets\\\]
\\# Heading not rendered
\\`Inline code not rendered\\`

---

**HTML inside Markdown:**

<div style="color: red;">
  This is raw HTML inside Markdown!
</div>

---

**Footnotes:**
Here is a footnote reference[^1].

[^1]: This is the footnote text.

---

**Definition list:**

Term 1
: Definition 1

Term 2
: Definition 2 with **bold** text

---

**Abbreviations:**
HTML is the standard markup language[^html].

[^html]: Hyper Text Markup Language

---

**Emojis (GFM):**

:smile: :tada: :+1: :fire: :rocket:

---

**Automatic URL linking:**

https://example.com

---

**Syntax highlighting with diff:**

```diff
+ Added line
- Removed line
! Changed line
# Comment
```

---

**Mathematical Expressions (Markdown + KaTeX/MathJax extensions):**

Inline math: \(E=mc^2\)

Block math:

$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

---

**Table of Contents (some parsers auto-generate):**

- [Heading 1](#heading-1)
- [Heading 2](#heading-2)
