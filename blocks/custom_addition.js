Blockly.Blocks['custom_addition'] = {
  json: {
    "type": "custom_addition",
    "message0": "add %1 to %2",
    "args0": [
      {
        "type": "input_value",
        "name": "NUM1",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "NUM2",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  init: function() {
    this.jsonInit(this.json);
  }
};

javascript.javascriptGenerator.forBlock['custom_addition'] = function(block, generator) {
  var value_num1 = generator.valueToCode(block, 'NUM1', javascript.Order.ATOMIC);
  var value_num2 = generator.valueToCode(block, 'NUM2', javascript.Order.ATOMIC);
  var code = `${value_num1} + ${value_num2}`;
  return [code, Blockly.JavaScript.ORDER_ADDITION];
};
