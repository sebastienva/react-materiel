`Input`
=======

This component works like a (standard input)[http://www.w3schools.com/tags/tag_input.asp].
  Differences come from label/error.

Props
-----

Name | Type | Required | Default | Description
-----|------|----------|---------|------------
disabled|boolean|No|false|Disable the input field
error|string|No|null|Error message related to the input field
float|boolean|No|false|Determine if the label is floating
label|string|Yes||Label of the input field
length|number|No||Enable character counter if defined
onBlur|function|No||onBlur event
onChange|function|No||Callback fired when input value change
onFocus|function|No||onFocus event
value|string|Yes||Value of the input field