---
title: YouTube Source
description: Content Source based on YouTube channels, playlists and videos
icon: '
    <path stroke="none" d="M15.006 24.394h-.014c-.784-.005-7.72-.068-9.685-.6A4.018 4.018 0 012.48 20.97c-.515-1.93-.482-5.647-.478-5.944-.004-.295-.037-4.042.476-5.988l.002-.006c.366-1.358 1.474-2.474 2.824-2.844l.01-.003c1.943-.51 8.892-.573 9.678-.578h.014c.787.005 7.74.068 9.688.6a4.017 4.017 0 012.824 2.822c.533 1.947.484 5.703.478 6.02.004.312.035 3.995-.476 5.935l-.001.005a4.02 4.02 0 01-2.83 2.826l-.005.002c-1.942.51-8.892.573-9.678.578zM4.441 9.558c-.451 1.718-.408 5.417-.408 5.454v.027c-.014 1.026.034 3.997.409 5.404a1.98 1.98 0 001.394 1.39c1.45.392 7.099.516 9.163.53 2.07-.014 7.727-.134 9.166-.511a1.982 1.982 0 001.392-1.39c.375-1.427.422-4.384.408-5.403v-.032c.019-1.039-.018-4.044-.406-5.463l-.001-.004a1.982 1.982 0 00-1.396-1.393c-1.436-.393-7.093-.516-9.163-.53-2.068.014-7.72.134-9.163.51a2.037 2.037 0 00-1.395 1.41zm22.097 11.166zM12.41 19.113v-8.226L19.52 15l-7.11 4.113z"/>

'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **YouTube Source** feeds data from ...

---

## Integration

{% partial file="ytp-sources-integration.md" variables={source: "YouTube"} /%}

The cache is set to 3600 seconds by default, if your workflow requires immediate results disable the cache by setting it to 0, but being this an API-driven source it is not recommended.

---