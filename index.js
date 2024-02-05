import { visit } from "unist-util-visit";
import { headingRank } from "hast-util-heading-rank";

/**
 * Rehype plugin to normalize headings.
 *
 * @param {{minimumLevel?: number}} options
 * @returns {import('unified').Transformer}
 */
export default function rehypeHeadingsNormalize({ minimumLevel = 1 } = {}) {
  return function transformer(tree) {
    let headings = [];

    // Collect all headings and their ranks.
    visit(tree, "element", (node) => {
      const rank = headingRank(node);
      if (rank) {
        headings.push({ node, rank });
      }
    });

    // Determine the shift needed to meet the minimumLevel, if any.
    const currentMinLevel = Math.min(...headings.map((h) => h.rank));
    if (currentMinLevel && currentMinLevel !== Infinity) {
      const shift = minimumLevel - currentMinLevel;

      // Adjust headings to meet minimumLevel.
      if (shift > 0) {
        headings.forEach((heading) => {
          heading.node.tagName = `h${Math.min(heading.rank + shift, 6)}`;
        });
      }

      // Normalize heading hierarchy.
      for (let i = 1; i < headings.length; i++) {
        const prevRank = headingRank(headings[i - 1].node);
        let currentRank = headingRank(headings[i].node);

        if (currentRank - prevRank > 1) {
          currentRank = prevRank + 1;
          headings[i].node.tagName = `h${Math.min(currentRank, 6)}`;
        }
      }
    }
  };
}
