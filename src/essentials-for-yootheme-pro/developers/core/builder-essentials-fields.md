# Essentials Fields

Essentials for YOOtheme Pro introduces some new fields that may be helpful when building new features in the customizer.

This is the growing list of fields.

## Summary

- [Info](#info-field)
- [File](#file-field)
- [ContentItems](#content-items-field)
- [Repeatable](#repeatable-field)
- [RepeatableMulti](#repeatable-multi-field)
- [SettingsPanel](#settings-panel-field)
- SettingsPanels
- InputDrop
- SelectDrop
- Number
- SimpleQuery
- ButtonModal
- ButtonPanel
- SourceSelect

### Info Field

Displays a simple `<div>` containing a predefined text or html. Useful for adding some extra information to the
customizer.

Usage:

```json
{
  ...
  "fields": {
    "your-field": {
      "type": "yooessentials-info",
      "description": "Some extra info to display"
    }
  }
  ...
}

```

### File Field

A file picker field. Allows for selecting either a file or a folder. Uses the core YOOtheme pro file picker UI.

**Extra Configuration Options**

- `mode`: can be either `file` or `folder`.

Usage:

```json
{
  ...
  "fields": {
    "your-field": {
      "label": "Pick a File",
      "type": "yooessentials-file",
      "mode": "file"
    }
  }
  ...
}

```

### Content Items field

This field is one of the most powerful and flexible ones. It's used a lot in our tools. It allows to create a list of
items. The items can be a list of the same field type, or even a mix of different fields (for example our input types in
the form addon)

**Extra Configuration Options**

- `button`: the label of the button that allows to add the items
- `emptyMsg`: the label to display when no items are present
- `modalTitle`: Title of the modal used to add the fields
- `icon`: true or false to display an icon for the field
- `title`: a javascript expression that evaluates the single item's title
- `filter.group`: when a filter group is specified, the items available will be any field type that matches the field
  group, like "form".
- `filter.name`: can be a regular expression that allows for filtering the field type name.
- `item`: the name of another field type to use as the content item.

Usage:

```json
{
  ...
  "fields": {
    "your-field": {
      "label": "Items",
      "type": "yooessentials-content-items",
      "title": "title || link",
      "button": "Add Item",
      "emptyMsg": "No items Yet",
      "icon": true,
      "modalTitle": "Items",
      "filter": {
        "group": "form",
        "name": "yooessentials_social_sharing_(.*)"
      }
    }
  }
  ...
}

```

### Repeatable field

With this field you can create a repeatable list of other field types. For example you can make a list of "text fields",
where the user can add / remove / reorder them in any way.

**Extra Configuration Options**

- `repeat`: The type of the field that needs to be added
- `button`: the label of the button that allows to repeat the field

```json
    ...
"emails": {
"label": "Email List",
"type": "yooessentials-repeatable",
"repeat": "text",
"button": "Add Email"
},
...
```

### Repeatable Multi field

Similar to the [Repeatable Field](#repeatable-field), this one allows you to repeat a **set of fields**. Basically, it
allows you create a list of repeatable sub-config options, for example a list of `name` and `email` fields. This list
can be ordered as well.

**Extra Configuration Options**

- `type`: The type of the field that needs to be added
- `button`: the label of the button that allows to repeat the field
- `msgEmpty`: The empty message to show when no fields are present
- `orderable`: if the list can be ordered or not
- `fields`: a json object of the fields to use. Can of course be mixed up with any other field.

Here's a complex example, taken from our codebase

```json

{
  "table_relations": {
    "label": "Relations",
    "type": "yooessentials-repeatable-multi",
    "msgEmpty": "Add Relation",
    "orderable": false,
    "fields": {
      "relation_name": {
        "label": "Name",
        "description": "The name to associate the relation with."
      },
      "_relation": {
        "type": "grid",
        "width": "1-2",
        "description": "The relation type and the related table to make the relation with. <b>One to One</b> relation, also known as BelongsTo, allows relating an entry with another single entry, e.g. <i>Article belongs to an Author</i>. <b>One to Many</b> relation, also known as HasMany, allows relating an entry with multiple entries, e.g. <i>Article has many Categories</i>. You can create multiple relations of different types.",
        "fields": {
          "relation_type": {
            "label": "Relation Type",
            "type": "select",
            "default": "1-1",
            "options": {
              "One to One": "1-1",
              "One to Many": "1-n"
            }
          },
          "related_table": {
            "label": "Related Table",
            "type": "yooessentials-input-drop",
            "endpoint": "yooessentials/source/database/tables"
          }
        }
      },
      "_related_table": {
        "type": "grid",
        "width": "1-2",
        "fields": {
          "main_table_key": {
            "label": "Main Table Key",
            "description": "The main table key to make the relation from.",
            "type": "yooessentials-input-drop",
            "endpoint": "yooessentials/source/database/fields",
            "params": {
              "table_field_path": "table"
            }
          },
          "related_table_key": {
            "label": "Related Table Key",
            "description": "The related table key to make the relation to.",
            "type": "yooessentials-input-drop",
            "endpoint": "yooessentials/source/database/fields",
            "params": {
              "table_field_path": "table_relations.__index__.related_table"
            }
          }
        }
      }
    }
  }
}
```

### Settings Panel Field

This field is an extended version of the [Content Items Field](#content-items-field). Items in this field can be sorted,
and the fields inside of this field are declared in a dedicated panel.

It's mostly used in the [Settings Panels Field](#settings-panels-field)

**Extra Configuration Options**

- `panel` The name of the panel to display
- `emptyMsg` Message to display to the user when no items are set
- `button` The label of the button used to add items

Example usage:

```json
{
  "fields": {
    "columns": {
      "label": "Columns",
      "type": "yooessentials-settings-panel",
      "panel": "forms-action-save-csv-column",
      "emptyMsg": "No columns yet.",
      "button": "Add Field",
      "description": "List of columns to compose the CSV. Defaults to all fields."
    }
  },
  "panels": {
    "forms-action-save-csv-column": {
      "title": "CSV Column",
      "fields": {
        "title": {
          "label": "Title"
        },
        "field": {
          "label": "Field",
          "type": "yooessentials-form-control-select"
        }
      }
    }
  }
}
```


### Settings Panels Field

This is an extended version of the [Setting Panel Field](#settings-panel-field), where the panels can be more than one,
and can be opened in a dedicated model.

This is widely used in all YOOessentials Addons, and it's very versatile.
It powers the "Create actions" panel in the Form Addon, and the "Create new Source" settings in the Sources Addon.

**Extra Configuration Options**

Same as the [Setting Panel Field](#settings-panel-field) plus:
- `modal` Set this to true if the settings should be opened in a dedicated panel instead of in the sidebar as per default
- `options`: List of the various panels, see example below

```json
{
  "fields": {
    "after_submit_actions": {
      "label": "After Submit Actions",
      "button": "Add Action",
      "options": {
        "action-name-1": {
          "title": {
            "default": "Action Name 1",
            "prop": "name"
          },
          "panel": "action-panel-1"
        },
        "action-name-2": {
          "title": {
            "default": "Action Name 2",
            "prop": "name"
          },
          "panel": "action-panel-2"
        }
      },
      "emptyMsg": "Add Action",
      "modal": true,
      "type": "yooessentials-settings-panels",
      "description": "Set the actions to be executed after a form has been successfully submitted."
    },
    "panels": {
      "action-panel-1": {
        "title": "CSV Column",
        "fields": {
          "title": {
            "label": "Title"
          },
          "field": {
            "label": "Field",
            "type": "yooessentials-form-control-select"
          }
        }
      },
      "action-panel-2": {
        "title": "CSV Column",
        "fields": {
          "title": {
            "label": "Title"
          },
          "field": {
            "label": "Field",
            "type": "yooessentials-form-control-select"
          }
        }
      }
    }
  }
}
```
