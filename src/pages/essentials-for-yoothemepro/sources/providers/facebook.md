---
title: Facebook Source
description: Content Source based on Facebook Pages and Posts
icon: '
    <path fill="none" stroke-width="1.7" stroke-linejoin="round" d="M27.999 15c0-7.179-5.82-12.999-13-12.999C7.82 2.001 2 7.821 2 15.001c0 6.488 4.754 11.866 10.968 12.841v-9.084h-3.3v-3.757h3.3v-2.864c0-3.258 1.941-5.058 4.91-5.058 1.423 0 2.91.254 2.91.254v3.199H19.15c-1.615 0-2.118 1.002-2.118 2.03v2.439h3.605l-.576 3.757h-3.03v9.084C23.246 26.867 28 21.489 28 15.001Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Facebook Source** feeds data from ...

---

## Integration

{% partial file="ytp-sources-integration.md" variables={source: "Facebook"} /%}

The cache is set to 3600 seconds by default, if your workflow requires immediate results disable the cache by setting it to 0, but being this an API-driven source it is not recommended.

---