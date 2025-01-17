# Custom Collections

Place your icons collection in `media/yooessentials/icons/` for Joomla or `wp-content/yooessentials/icons` for WordPress under a namespaced folder, e.g. `my-collection`. The collection will be automatically picked up and displayed among the other collections in the icons picker Modal.

::: tip
You can group the icons into subfolders for a better organization or style separation, eg `my-collection/group-a` or `my-collection/group-b`.
:::

You can optionally place a `my-collection.json` file beside the folder and write the metadata as the next example.

```json
{
  "title": "My Collection",
  "groups": ["group-a", "group-b"]
}
```

## Distribute Collections

If you want to reuse your collections across projects you can wrap them into a custom plugin and specify the path by extending the `Icons` class.

```php
<?php

use ZOOlanders\YOOessentials\Icons;

return [

  'extend' => [

    Icons::class => function (Icons $icons, $app) {
      $icons->addCollectionsDir('/dir/to/myplugin/collections');
    }

  ]

];
```
