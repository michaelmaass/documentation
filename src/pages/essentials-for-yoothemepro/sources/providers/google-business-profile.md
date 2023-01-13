---
title: Google Business Profile Source
description: Content Source based on Google Business Profiles
icon: '
    <path stroke="none" d="M20.431 20.301v1.05h1.737c-.07.45-.525 1.32-1.737 1.32-1.045 0-1.898-.865-1.898-1.933 0-1.067.853-1.933 1.898-1.933.595 0 .993.254 1.22.473l.832-.801a2.935 2.935 0 0 0-2.052-.8 3.06 3.06 0 0 0-3.062 3.061 3.06 3.06 0 0 0 3.062 3.062c1.767 0 2.94-1.242 2.94-2.992 0-.2-.022-.354-.048-.507H20.43z"/>
    <path stroke="none" d="M24.338 14.148c-1.416 0-2.39-.694-2.39-2.11v-.033l-.848-6.88h2.878c.389 0 1.146.503 1.23.882l1.323 6.108c-.03 1.39-.79 2.033-2.187 2.033m.333 10.591H5.997c-.33 0-.704-.385-.704-.714v-8.37s.068.043.36.043a3.66 3.66 0 0 0 3.113-1.74 3.66 3.66 0 0 0 3.114 1.74 3.66 3.66 0 0 0 3.113-1.74 3.66 3.66 0 0 0 3.114 1.74 3.66 3.66 0 0 0 3.114-1.74 3.66 3.66 0 0 0 3.114 1.74c.314 0 .342-.063.342-.063v8.424a.68.68 0 0 1-.699.68M5.008 5.846c.084-.38.371-.71.76-.71l3.033-.01-.9 7.048v.034c0 1.416-.826 1.94-2.242 1.94-1.397 0-1.944-.663-1.974-2.053l1.323-6.25zm5.304-.72h3.985l.054 6.912c0 1.416-1.004 2.11-2.42 2.11-1.405 0-2.388-.614-2.405-2.015l.786-7.008zm10.181 6.944c-.017 1.402-.8 2.078-2.206 2.078-1.416 0-2.553-.694-2.553-2.11l-.013-6.913h3.864l.908 6.945zm5.997-6.905a1.938 1.938 0 0 0-1.88-1.511H5.377c-.897 0-1.688.635-1.881 1.51L1.992 11.98v.06a3.66 3.66 0 0 0 1.74 3.113v9.27a1.92 1.92 0 0 0 1.917 1.918h18.754a1.92 1.92 0 0 0 1.918-1.917V15.11a3.66 3.66 0 0 0 1.674-3.072v-.06L26.49 5.166z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Google Business Profile Source** feeds data from ...

---

## Integration

{% partial file="ytp-sources-integration.md" variables={source: "Google Business Profile"} /%}

The cache is set to 3600 seconds by default, if your workflow requires immediate results disable the cache by setting it to 0, but being this an API-driven source it is not recommended.

---