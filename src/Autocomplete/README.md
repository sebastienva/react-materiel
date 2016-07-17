`Autocomplete`
==============

This component is not present in materialize.
  This field works like a select but with a "search" function.

Props
-----

Name | Type | Required | Default | Description
-----|------|----------|---------|------------
children|any|Yes||Autocomplete content (must be options)
isLoading|boolean|No|false|Display a loading throbber
label|string|Yes||Label text of the field *
onSearch|function|Yes||Callback fired when a search is requested. This callback is already debounced to limit request