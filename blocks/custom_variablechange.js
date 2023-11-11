Blockly.Blocks['custom_variablechange'] = {
  json: {
    "type": "block_type",
    "message0": "change %1 by %2",
    "args0": [
      {
        "type": "input_value",
        "name": "VARIABLE",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "NUMBER",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
  },
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['custom_variablechange'] = function(block, generator) {
  var value_variable = generator.valueToCode(block, 'VARIABLE', javascript.Order.ATOMIC);
  var value_number = generator.valueToCode(block, 'NUMBER', javascript.Order.ATOMIC);
  var code = `${value_variable} += ${value_number}`;
  return code;
};
