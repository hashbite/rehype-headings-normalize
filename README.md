# Rehype Headings Normalize

> `rehype-headings-normalize` is a Rehype plugin designed to automatically adjust and normalize the hierarchy of HTML headings in your documents. Crafted with human editors in mind, it corrects common mistakes such as misused or incorrectly leveled headings, ensuring your content is both semantically correct and SEO-friendly. This plugin is perfect for making all headlines hierarchy well-structured and Google happy, without the need for manual adjustments.

[![NPM Version Badge](https://badgen.net/npm/v/rehype-headings-normalize)](https://www.npmjs.com/package/rehype-headings-normalize)
[![License Badge](https://badgen.net/npm/license/rehype-headings-normalize)](https://github.com/hashbite/rehype-headings-normalize/blob/main/LICENSE)

## Key Features

- **Heading Level Normalization:** Automatically adjusts headings to maintain a logical and SEO-friendly structure.
- **Minimum Level Configuration:** Ensures all headings meet a specified minimum level to maintain consistency across your content.
- **Hierarchy Correction:** Adjusts child headings to ensure no heading is more than one level deeper than its parent, preventing overly deep nesting and promoting readability.
- **SEO Improvement:** By correcting heading structures, it improves the SEO of your documents, making them more favorable to search engines like Google.

## Getting Started

### Installation

To start using `rehype-headings-normalize`, first install the package using npm:

```bash
npm install rehype-headings-normalize
```

### Configuration

Integrate `rehype-headings-normalize` into your Rehype setup in your project's configuration file. Here's an example of how to add it to your processing pipeline:

```js
import rehype from 'rehype';
import rehypeHeadingsNormalize from 'rehype-headings-normalize';

rehype()
  .use(rehypeHeadingsNormalize, { minimumLevel: 2 }) // Customize the minimumLevel as needed
  .process(yourHtmlContent)
  .then(file => {
    console.log(String(file));
  });
```

#### Options:

- `minimumLevel` (optional): Defines the minimum heading level (`1` through `6`) to ensure all headings are at least of this level. Defaults to `1` if not specified.

## Related

*   [`rehype-shift-heading`](https://github.com/rehypejs/rehype-shift-heading)
    — Simple variant of this plugin, only supports shifting of headlines.

## Contribution

We welcome contributions from the community to make `rehype-headings-normalize` even better. Whether it's through bug reports, feature requests, or pull requests, your input is valuable in improving this tool.

## License

`rehype-headings-normalize` is open-sourced software licensed under the MIT License. Feel free to use, modify, and distribute it as part of your projects.
