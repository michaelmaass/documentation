---
title: Select Field Element
preset: /assets/ytp/presets/FormArea-Select.json
icon: '<svg width="150" height="150" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
  <path fill="none" stroke-width="2" d="M2 7.5h26v15H2z"/>
  <path d="M24.5 14l-3 3-3-3" fill="none" stroke-width="2"/>
</svg>'
---

{% elementIcon icon=$markdoc.frontmatter.icon /%}

A menu of options form control. {% .lead %}

The Select element displays a [\<select\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) HTML element, use it to allow users choosing, by selection, a single or multiple prestablished options.

![Select Element](/assets/ytp/forms/fields/select.webp)

---

## Settings

It inherits common settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Size** | The field size applied with `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Width** | The field width applied with `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |
| **Height** | The number of rows in the list that will be visible by default, if Multiple Selection is enabled. |
| **Multiple Selection** | Defines if it's allowed to choose more than one option. |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

## Options

Options are specified as child items that can be inputed manually as well as dynamically with the use of a Dynamic Content source. Each option has the following settings:

{% image %}
![Field Options](/assets/ytp/forms/fields/fields/options.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Value** | The option value, must be a unique among its siblings. | &#x2713; |
| **Text** | The option text, defaults to the value if omitted. HTML tags will be stripped. | &#x2713; |
| **State** | Defines if the option is `Disabled` or `Enabled`. Disabled options are unusable and unclickable. | &#x2713; |

---

## Validation

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min** | The minimum amount of options that must be chosen, `greater than` or `equal to`. | &#x2713; | | &#x2713; |
| **Max** | The maximum amount of options that can be chosen, `lower than` or `equal to`. | &#x2713; | | &#x2713; |

{% details summary="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a Select Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}