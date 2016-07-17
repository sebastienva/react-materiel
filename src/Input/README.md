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
onChange|function|No||Callback fired when input value change
onKeyDown|function|No||Callback fired when a key is pressed
value|any|Yes||Value of the input field