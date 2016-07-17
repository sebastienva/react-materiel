`Autocomplete`
==============

This component is similar to a [Select](https://github.com/sebastienva/materialize-me/tree/master/src/Select) but with a "search" function.

Props
-----

Name | Type | Required | Default | Description
-----|------|----------|---------|------------
children|Node|Yes||`option` elements
isLoading|boolean|No|false|Display a loading throbber
label|string|Yes||Label text of the field
onSearch|function|Yes||Callback fired when a search is requested. This callback is already debounced to limit request