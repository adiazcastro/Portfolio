---
title: 'Markdown Style Guide'
description: 'A comprehensive guide to Markdown syntax and formatting options'
pubDate: 'Jun 03 2024'
heroImage: '/images/posts/blog-placeholder-3.jpg'
category: 'blog'
tags: ['design']
---

# Markdown Style Guide

This guide covers the essential Markdown syntax for creating well-formatted content.

## Basic Syntax

### Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

### Text Formatting

```markdown
*Italic text* or _italic text_
**Bold text** or __bold text__
***Bold and italic*** or ___bold and italic___
~~Strikethrough text~~
```

### Lists

Unordered list:
```markdown
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
- Item 3
```

Ordered list:
```markdown
1. First item
2. Second item
3. Third item
```

### Links

```markdown
[Link text](URL)
[Link with title](URL "Title")
```

### Images

```markdown
![Alt text](image.jpg)
![Alt text](image.jpg "Image title")
```

### Blockquotes

```markdown
> Single line blockquote
> Multiple line blockquote
> continues here
```

### Code

Inline code: `code`

Code blocks:
````markdown
```javascript
function hello() {
  console.log("Hello world!");
}
```
````

### Tables

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

## Extended Syntax

### Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
```

### Footnotes

```markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote.
```

### Definition Lists

```markdown
term
: definition
```

### Emoji

```markdown
:smile: :heart: :thumbsup:
```

### Highlighting

```markdown
==highlighted text==
```

## HTML in Markdown

Some HTML tags are allowed in Markdown:

```markdown
<div class="custom-class">
  Custom HTML content
</div>

<span style="color: red;">Red text</span>
```

## Best Practices

1. Use consistent heading levels
2. Add blank lines before and after elements
3. Use reference links for repeated URLs
4. Include alt text for images
5. Keep line length readable (around 80 characters)
6. Use code blocks for code snippets
7. Preview before publishing

Remember that Markdown is designed to be readable in both its raw form and when rendered.