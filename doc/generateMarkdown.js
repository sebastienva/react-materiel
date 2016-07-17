"use strict";

function stringOfLength(string, length) {
  var newString = '';
  for (var i = 0; i < length; i++) {
    newString += string;
  }
  return newString;
}

function generateTitle(name) {
  var title = '`' + name + '`';
  return title + '\n' + stringOfLength('=', title.length) + '\n';
}

function generateDesciption(description) {
  return description + '\n';
}

function generatePropType(type) {
  var values;
  if (Array.isArray(type.value)) {
    values = '(' +
      type.value.map(function(typeValue) {
        return typeValue.name || typeValue.value;
      }).join('|') +
      ')';
  } else {
    values = type.value;
  }

  return 'type: `' + type.name + (values ? values: '') + '`\n';
}

function generatePropDefaultValue(value) {
  return 'defaultValue: `' + value.value + '`\n';
}

function generateProp(propName, prop) {
  return (
    '### `' + propName + '`' + (prop.required ? ' (required)' : '') + '\n' +
    '\n' +
    (prop.description ? prop.description + '\n\n' : '') +
    (prop.type ? generatePropType(prop.type) : '') +
    (prop.defaultValue ? generatePropDefaultValue(prop.defaultValue) : '') +
    '\n'
  );
}

function generateProps(props) {
  var title = 'Props';
  return (
    title + '\n' +
    stringOfLength('-', title.length) + '\n' +
    '\n' +
    'Name | Type | Required | Default | Description'  + '\n' +
    '-----|------|----------|---------|------------'  + '\n' +

    Object.keys(props).sort().map(function(propName) {
      //return generateProp(propName, props[propName]);
      var data = props[propName];

      var type = data.flowType.type;
      if(type == null) {
        type = data.flowType.name;
      }

      var required = 'Yes';
      var defaultValue = '';
      if(data.defaultValue) {
        required = 'No';
        defaultValue += data.defaultValue.value;
      } else if(data.flowType.nullable) {
        required = 'No';
      }

      return propName + '|' + type + '|' + required + '|' + defaultValue + '|' + data.description;
    }).join('\n')
  );
}

function generateMarkdown(name, reactAPI) {
  var markdownString =
    generateTitle(name) + '\n' +
    generateDesciption(reactAPI.description) + '\n' +
    generateProps(reactAPI.props);

  return markdownString;
}

module.exports = generateMarkdown;
