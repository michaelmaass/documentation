---
title: CloudFlare Stream Source
description: Content Source based on CloudFlare Stream videos
icon: '
    <path stroke="none" d="M3.921 23.264h8.98c.487.03.871.437.871.924a.931.931 0 01-.872.925H3.921a.927.927 0 01-.923-.923c0-.507.416-.923.923-.923v-.003zm18.834 0h2.287c.487.03.872.437.872.924a.931.931 0 01-.872.925h-2.287a.927.927 0 01-.923-.923c0-.507.416-.923.923-.923v-.003z"/>
    <circle stroke="none" cx="9.633" cy="13.624" r="1.322" transform="translate(1.835 1.689) scale(1.65148)"/>
    <path fill="none" stroke-width="1.6" stroke-linejoin="round" d="M23.413 10.25c-.09-3.593-3.019-6.525-6.611-6.622a6.714 6.714 0 00-6.214 4.364 5.9 5.9 0 00-1.195-.165c-2.326.072-4.189 2.032-4.142 4.359 0 .334.08.585.08.835A2.96 2.96 0 003.1 15.963l-.002.077a2.943 2.943 0 002.87 2.93h17.445c1.673 0 3.585-2.177 3.585-4.356a4.25 4.25 0 00-3.585-4.363z"/>
    <path stroke="none" d="M18.517 12.728l-4.253 3.055-.016.011a.573.573 0 01-.801-.165.627.627 0 01-.103-.346V9.172v-.01c0-.322.265-.59.587-.593a.58.58 0 01.33.113l4.256 3.06a.61.61 0 010 .99v-.004z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **CloudFlare Stream Source** feeds data from ...

---

## Integration

{% partial file="ytp-sources-integration.md" variables={source: "CloudFlare Stream"} /%}

The cache is set to 3600 seconds by default, if your workflow requires immediate results disable the cache by setting it to 0, but being this an API-driven source it is not recommended.

---