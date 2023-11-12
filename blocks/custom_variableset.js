Blockly.Blocks['custom_variableset'] = {
  json: {
    "type": "variabless_set",
    "message0": "%1 %2 = %3",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "TYPE",
        "options": [
          [
            "const",
            "const"
          ],
          [
            "var",
            "var"
          ],
          [
            "let",
            "let"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "NAME",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "VALUE"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['custom_variableset'] = function(block, generator) {
  var dropdown_type = block.getFieldValue('TYPE');
  var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
  var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
  var code = `${dropdown_type} ${value_name} = ${value_value};\n`;
  return code;
};
