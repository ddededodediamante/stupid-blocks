Blockly.Blocks['custom_variablechange'] = {
  json: {
    "type": "custom_variablechange",
    "message0": "change %1 %2 by %3",
    "args0": [
      {
        "type": "field_input",
        "name": "VAR",
        "text": "variable"
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
  var text_var = block.getFieldValue('VAR');
  var value_name = generator.valueToCode(block, 'NUMBER', javascript.Order.ATOMIC);
  var code = `${text_var} += ${value_number}`;
  return code;
};
