---
title: Input Password Field Element
preset: /assets/ytp/presets/FormArea-InputPassword.json
---

An obscured password form control. {% .lead %}

Child of [Input Element](./input), the Input Password element displays a [\<input type="password"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password) HTML element, use it to create one-line text field where the user can input it password without it being visible. The text is obscured usually by replacing each character with a symbol such as the asterisk (`*`) or a dot (`•`). This character will vary depending on the user agent and operating system.

![Input Password Element](/assets/ytp/forms/fields/input-password.webp)

---

## Settings

It inherits common settings and the parent's [Fields Settings](./input#fields-settings) with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | The text to be shown while there is no user input. | &#x2713; |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

## Validation

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min Length** | The minimum content length that the input value must constrain to, `greater than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Max Length** | The maximum content length that the input value must constrain to, `lower than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Pattern** | The [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; | &#x2713; | &#x2713; |

{% details summary="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a Input Element from the Form Essentials group and a Input Password element as it child.
1. Access the child element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}