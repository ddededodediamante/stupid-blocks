Blockly.Blocks['value_inlinereturn'] = {
  json: {
  "type": "value_inlinereturn",
  "message0": "return %1",
  "args0": [
    {
      "type": "input_value",
      "name": "RETURN"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['value_inlinereturn'] = function(block, generator) {
  var value_return = generator.valueToCode(block, 'RETURN', javascript.Order.ATOMIC) || null;
  var code = `return ${value_return};`;
  return code;
};
