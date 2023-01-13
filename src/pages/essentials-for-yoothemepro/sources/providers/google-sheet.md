---
title: Google Sheet Source
description: Content Source based on Google Drive Spreadsheets
icon: '
    <path stroke="none" d="M7.687 2c4.328-.011 1.71-.023 8.94 0 .727.002.727 1.623 0 1.625-7.23.023-4.612.011-8.94 0a.819.819 0 00-.813.817v21.121c0 .447.366.813.813.813h14.626a.815.815 0 00.813-.813s-.014-15.412 0-15.439c.358-.695 1.191-.686 1.624 0 .011.018 0 15.44 0 15.44A2.438 2.438 0 0122.313 28H7.687a2.438 2.438 0 01-2.437-2.437V4.442A2.446 2.446 0 017.687 2z"/>
    <path stroke="none" d="M20.215 13.095H9.785a.87.87 0 00-.869.87v10.429c0 .48.39.869.87.869h10.429c.48 0 .869-.39.869-.87V13.965a.87.87 0 00-.87-.869zm-9.56 5.215h3.476v1.738h-3.477V18.31zm5.214 0h3.477v1.738h-3.477V18.31zm3.477-1.738h-3.477v-1.739h3.477v1.739zm-5.215-1.739v1.739h-3.477v-1.739h3.477zm-3.477 6.953h3.477v1.739h-3.477v-1.739zm5.215 1.739v-1.739h3.477v1.739h-3.477z"/>
    <path stroke-width=".3" d="M24.931 8.478l1.51-2.156L23.246.888H20.37l-3.194 5.434 1.51 2.156h6.245zm-.282-.542h-5.406l.828-1.355h5.527l-.949 1.355zm-1.404-1.897h-2.843l1.407-2.306 1.436 2.306zm2.4 0h-1.761l-2.87-4.609h1.922l2.709 4.609zm-5.113-4.356l.956 1.535-2.712 4.444-.956-1.365 2.712-4.614z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Google Sheet Source** feeds data from ...

---

## Integration

{% partial file="ytp-sources-integration.md" variables={source: "Google Sheet"} /%}

The cache is set to 3600 seconds by default, if your workflow requires immediate results disable the cache by setting it to 0, but being this an API-driven source it is not recommended.

---